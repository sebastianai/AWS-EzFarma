import {  CreateTableCommand, CreateTableCommandOutput, ListTablesCommand, ListTablesCommandOutput, ListTablesCommandInput } from '@aws-sdk/client-dynamodb';
import  AWS  from '../AWS';

import { Table } from './interfaces';

const db = AWS.DynamoDB;
export const document = AWS.DocumentClient;

export const createTable = async( params: Table ):Promise<CreateTableCommandOutput | undefined> => {
    try {
        const data = await db.send(new CreateTableCommand(params));
        console.log("Table Created", data);
        return data;
      } catch (err) {
        console.log("Error", err);
      }
}

export const listTables = async(params:ListTablesCommandInput):Promise<ListTablesCommandOutput | undefined> => {
    try {
        const data = await db.send(new ListTablesCommand(params));
        console.log("Tables", data);
        return data;
      } catch (err) {
        console.log("Error", err);
      }
}

export default db;