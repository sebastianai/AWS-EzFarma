import { AttributeValue, GetItemCommand, GetItemCommandInput } from '@aws-sdk/client-dynamodb';
import { AdminGetUserCommand, AdminGetUserCommandInput, GetUserCommand, GetUserCommandInput, ListUserPoolsCommand, ListUserPoolsCommandInput, UserPoolDescriptionType } from '@aws-sdk/client-cognito-identity-provider';

import AWS from '../AWS';
import { mySQL } from '../database/db';
import { mysqlWhere } from 'database/interfaces';

const cognito = AWS.Cognito;

export const CognitoValidatePools = async (pool: string) => {
    try {
        const params: ListUserPoolsCommandInput = {
            MaxResults: 30
        }
        const { UserPools } = await cognito.send(new ListUserPoolsCommand(params))
        if (!UserPools) {
            throw Error('Ningun grupo de usuarios encontrado')
        }
        const pools = UserPools.filter(({ Name }) => Name === pool)
        if (pools.length === 0) {
            throw Error(`${pool} no pertenece a ningun grupo - Grupos displonibles ${UserPools.map((p) => p.Name)}`)
        }

        return true
    } catch (error) {
        throw error
    }
}

export const CognitoValidateUserByField = (field: string, value: string, requiredExists:boolean = false) => {
    return async (req: any) => {
        try {
            const email = req.body.email;
            const poolParams: ListUserPoolsCommandInput = {
                MaxResults: 30
            }
            const { UserPools } = await cognito.send(new ListUserPoolsCommand(poolParams))
            const pool = UserPools?.find(({ Name }) => Name === req.params.type)?.Id
            const params: AdminGetUserCommandInput = {
                Username: email,
                UserPoolId: pool
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
            AccessToken: req.token
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