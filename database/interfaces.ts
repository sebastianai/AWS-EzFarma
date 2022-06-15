export interface Table {
    AttributeDefinitions:  AttributeDefinition[];
    KeySchema:             KeySchema[];
    ProvisionedThroughput: ProvisionedThroughput;
    TableName:             string;
    StreamSpecification:   StreamSpecification;
}

export interface AttributeDefinition {
    AttributeName: string;
    AttributeType: string;
}

export interface KeySchema {
    AttributeName: string;
    KeyType:       string;
}

export interface ProvisionedThroughput {
    ReadCapacityUnits:  number;
    WriteCapacityUnits: number;
}

export interface StreamSpecification {
    StreamEnabled: boolean;
}

export interface mysqlWhere{
    key:string;
    value:string | number | boolean;
    type:'=' | '>' | '<' | '>=' | '<=' | '<>' | 'BETWEEN' | 'LIKE' | 'IN';
}

