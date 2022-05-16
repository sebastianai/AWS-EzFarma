import { AttributeValue } from "@aws-sdk/client-dynamodb";
export interface WriteBatchCommand {
    PutRequest?: PutRequest[];
}

export interface PutRequest {
    Item?: PutItem | unknown;
}

export interface PutItem {
    [key: string]: AttributeValue;
}
export interface Item {
    [key: string]: AttributeValue;
  }

export interface ArrToBatchOptions{
    Name:string;
    KeySchema:string;
    Drogstore:string;
}