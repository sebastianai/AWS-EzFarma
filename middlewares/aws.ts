import { Request } from "express-validator/src/base";
import { AttributeValue, GetItemCommand, GetItemCommandInput } from '@aws-sdk/client-dynamodb';
import { AdminGetUserCommand, AdminGetUserCommandInput, GetUserCommand, GetUserCommandInput, ListGroupsCommand, ListGroupsCommandInput } from '@aws-sdk/client-cognito-identity-provider';

import AWS from '../AWS';
import { mySQL } from '../database/db';
import { mysqlWhere } from 'database/interfaces';
import { Console } from "console";

const cognito = AWS.Cognito;

export const CognitoValidatePools = async (pool: string) => {
    try {
        const params: ListGroupsCommandInput = {
             UserPoolId:process.env.POOL_ID,
             Limit:30
        }
        const { Groups } = await cognito.send(new ListGroupsCommand(params))
        if (!Groups) {
            throw Error('Ningun grupo de usuarios encontrado')
        }
        const pools = Groups.filter(({ GroupName }) => GroupName === pool)
        if (pools.length === 0) {
            throw Error(`${pool} no pertenece a ningun grupo - Grupos displonibles ${Groups.map((p) => p.GroupName)}`)
        }

        return true
    } catch (error) {
        throw error
    }
}

export const CognitoValidateUserByField = (field: string, value: string, requiredExists:boolean = false) => {
    return async (req: Request) => {
        try {
            const email = req.body.email;
            const params: AdminGetUserCommandInput = {
                Username: email,
                UserPoolId: process.env.POOL_ID
            }
            const user = await cognito.send(new AdminGetUserCommand(params));
            const userExists = user.UserAttributes?.find((att) => att.Name === field && att.Value === value)
            if (userExists) {
                throw new Error(`El atributo ${field} debe ser unico, pero ya existe un usuario con el valor ${value}`)
            }

            return true
        } catch (error:any) {
            if(error.__type == 'UserNotFoundException' && requiredExists != true){
                return true
            }
            throw error
        }
    }
}

export const CognitoValidateUserByToken = async(access_token: string,req?:any) => {
    try {
        const params: GetUserCommandInput = {
            AccessToken: access_token || req.token
        }
        const user = await cognito.send(new GetUserCommand(params));
        if(req){
            req.user = user.UserAttributes?.find(({Name}) => Name?.includes('enterpriseName'))?.Value
        }
        return true
    } catch (error) {
        throw error
    }
}

export const DynamoValidateObject = async (tableName: string, searchField: string, key: AttributeValue, needed: boolean = false, sort?: AttributeValue) => {
    const db = AWS.DynamoDB;
    try {
        const params: GetItemCommandInput = {
            TableName: tableName,
            Key: {
                [searchField]: key,
            }
        }
        if (sort) params.Key = { key, sort }

        const query = await db.send(new GetItemCommand(params))
        if (query.Item) {
            if (needed != true) {
                throw Error('No se encontro el objecto')
            }
        } else {
            if (needed) {
                throw Error('No se encontro el objecto')
            }
        }
        return true
    } catch (error) {
        throw error
    }
}

export const RDSValidateObject = async(tablename:string,value:string | number,column?:string, filter?:mysqlWhere[] ) => {
    try {
        const result = await mySQL.select(tablename,value,column,filter);
        if(result.length < 1){
            throw new Error('Ningun objeto encontrado')
        }
    
        return true
    } catch (error) {
        throw error
    }
}