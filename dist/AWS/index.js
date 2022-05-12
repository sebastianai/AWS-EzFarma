"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const client_iam_1 = require("@aws-sdk/client-iam");
const client_1 = require("./client");
/**
 * @param  {S3Client} s3Client Config options from AWS service like Region, Credentials, etc.
 */
class AWS {
    constructor(s3Client) {
        this._dynamoDB = undefined;
        this._iam = undefined;
        this.client = s3Client;
        console.log('AWS instance created');
    }
    get Client() {
        return Object.assign({}, this.client);
    }
    get DynamoDB() {
        if (!this._dynamoDB) {
            this._dynamoDB = new client_dynamodb_1.DynamoDBClient({ region: 'us-east-1' });
        }
        return this._dynamoDB;
    }
    get IAM() {
        if (!this._iam)
            this._iam = new client_iam_1.IAMClient(this.client);
        return this._iam;
    }
    closeConnection() {
        var _a;
        this.client.destroy();
        (_a = this._dynamoDB) === null || _a === void 0 ? void 0 : _a.destroy();
    }
}
const aws = new AWS(client_1.s3Client);
exports.default = aws;
