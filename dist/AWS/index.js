"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const client_s3_1 = require("@aws-sdk/client-s3");
const client_ses_1 = require("@aws-sdk/client-ses");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const client_1 = require("./client");
/**
 * @param  {S3Client} s3Client Config options from AWS service like Region, Credentials, etc.
 */
class AWS {
    constructor(s3Client) {
        this._s3 = undefined;
        this._ses = undefined;
        this._dynamoDB = undefined;
        this._documentClient = undefined;
        this._cognito = undefined;
        this.client = s3Client;
        console.log('AWS instance created');
    }
    get Client() {
        return this.client;
    }
    get Cognito() {
        if (!this._cognito) {
            this._cognito = new client_cognito_identity_provider_1.CognitoIdentityProviderClient(this.client);
        }
        return this._cognito;
    }
    get S3() {
        if (!this._s3) {
            this._s3 = new client_s3_1.S3(this.client);
        }
        return this._s3;
    }
    get SES() {
        if (!this._ses) {
            this._ses = new client_ses_1.SES(this.client);
        }
        return this._ses;
    }
    get DynamoDB() {
        if (!this._dynamoDB) {
            this._dynamoDB = new client_dynamodb_1.DynamoDBClient(this.client);
        }
        ;
        return this._dynamoDB;
    }
    get DocumentClient() {
        if (!this._documentClient) {
            const marshallOptions = {
                convertEmptyValues: false,
                removeUndefinedValues: false,
                convertClassInstanceToMap: true
            };
            const unmarshallOptions = {
                wrapNumbers: false
            };
            const translateConfig = { marshallOptions, unmarshallOptions };
            this._documentClient = lib_dynamodb_1.DynamoDBDocumentClient.from(this.DynamoDB, translateConfig);
        }
        return this._documentClient;
    }
    closeConnection() {
        var _a, _b, _c;
        this.client.destroy();
        (_a = this._dynamoDB) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this._cognito) === null || _b === void 0 ? void 0 : _b.destroy();
        (_c = this._s3) === null || _c === void 0 ? void 0 : _c.destroy();
    }
}
const aws = new AWS(client_1.s3Client);
exports.default = aws;
//# sourceMappingURL=index.js.map