import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';
import { S3, S3Client } from "@aws-sdk/client-s3";
import { SES} from '@aws-sdk/client-ses';
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

import { s3Client as config } from './client';

/**
 * @param  {S3Client} s3Client Config options from AWS service like Region, Credentials, etc.
 */
class AWS{
    private client:S3Client;

    protected _s3:S3 | undefined = undefined;
    protected _ses:SES| undefined = undefined;
    protected _dynamoDB:DynamoDBClient | undefined = undefined;
    protected _documentClient:DynamoDBDocumentClient | undefined = undefined;
    protected _cognito:CognitoIdentityProviderClient | undefined = undefined;

    constructor(s3Client:S3Client){
        this.client = s3Client;
        console.log('AWS instance created');
    }

    get Client(){
        return this.client;
    }

    get Cognito(){
        if(!this._cognito){
            this._cognito = new CognitoIdentityProviderClient(this.client)
        }
        return this._cognito;
    }

    get S3(){
        if(!this._s3){
            this._s3 = new S3(this.client);
        }
        return this._s3;
    }

    get SES(){
        if(!this._ses){
            this._ses = new SES(this.client);
        }
        return this._ses;
    }

    get DynamoDB(){
        if(!this._dynamoDB){
            this._dynamoDB = new DynamoDBClient(this.client);
        };
        return this._dynamoDB;
    }
    get DocumentClient(){
        if(!this._documentClient){
            const marshallOptions = {
                convertEmptyValues: false,
                removeUndefinedValues: false,
                convertClassInstanceToMap: true
            };
            const unmarshallOptions = {
                wrapNumbers: false
            };
            const translateConfig = { marshallOptions, unmarshallOptions };
            this._documentClient = DynamoDBDocumentClient.from(this.DynamoDB,translateConfig)
        }
        return this._documentClient;
    }


    closeConnection(){
        this.client.destroy();
        this._dynamoDB?.destroy();
        this._cognito?.destroy();
        this._s3?.destroy();
    }
}

const aws = new AWS(config);

export default aws;