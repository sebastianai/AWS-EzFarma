import { Request,Response,NextFunction } from 'express';
import { AttributeValue, GetItemCommand, GetItemCommandInput } from '@aws-sdk/client-dynamodb';
import { IAM } from '@aws-sdk/client-iam';

import AWS from '../AWS';

const validateIAMUser = async(username:string) => {

}

export const validateObject = async(tableName:string,searchField:string, key: AttributeValue,sort?:AttributeValue) =>{
        const db = AWS.DynamoDB;
        try {
            const params:GetItemCommandInput = {
                TableName:tableName,
                Key:{
                    [searchField]:key,
                }
            }
            if(sort) params.Key = {key,sort}
            const query = await db.send(new GetItemCommand(params))
            console.log(query)
            if(query.Item) {
                throw Error('Primary key ya existente')
            }
            return true
        } catch (error) {
            throw error
        }
}