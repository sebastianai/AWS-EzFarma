"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RDSValidateObject = exports.DynamoValidateObject = exports.CognitoValidateUserByToken = exports.CognitoValidateUserByField = exports.CognitoValidatePools = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const AWS_1 = __importDefault(require("../AWS"));
const db_1 = require("../database/db");
const cognito = AWS_1.default.Cognito;
const CognitoValidatePools = (pool) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = {
            UserPoolId: process.env.POOL_ID,
            Limit: 30
        };
        const { Groups } = yield cognito.send(new client_cognito_identity_provider_1.ListGroupsCommand(params));
        if (!Groups) {
            throw Error('Ningun grupo de usuarios encontrado');
        }
        const pools = Groups.filter(({ GroupName }) => GroupName === pool);
        if (pools.length === 0) {
            throw Error(`${pool} no pertenece a ningun grupo - Grupos displonibles ${Groups.map((p) => p.GroupName)}`);
        }
        return true;
    }
    catch (error) {
        throw error;
    }
});
exports.CognitoValidatePools = CognitoValidatePools;
const CognitoValidateUserByField = (field, value, requiredExists = false) => {
    return (req) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const email = req.body.email;
            const params = {
                Username: email,
                UserPoolId: process.env.POOL_ID
            };
            const user = yield cognito.send(new client_cognito_identity_provider_1.AdminGetUserCommand(params));
            const userExists = (_a = user.UserAttributes) === null || _a === void 0 ? void 0 : _a.find((att) => att.Name === field && att.Value === value);
            if (userExists) {
                throw new Error(`El atributo ${field} debe ser unico, pero ya existe un usuario con el valor ${value}`);
            }
            return true;
        }
        catch (error) {
            if (error.__type == 'UserNotFoundException' && requiredExists != true) {
                return true;
            }
            throw error;
        }
    });
};
exports.CognitoValidateUserByField = CognitoValidateUserByField;
const CognitoValidateUserByToken = (access_token, req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const params = {
            AccessToken: access_token || req.token
        };
        const user = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand(params));
        if (req) {
            req.user = (_b = (_a = user.UserAttributes) === null || _a === void 0 ? void 0 : _a.find(({ Name }) => Name === null || Name === void 0 ? void 0 : Name.includes('enterpriseName'))) === null || _b === void 0 ? void 0 : _b.Value;
        }
        return true;
    }
    catch (error) {
        throw error;
    }
});
exports.CognitoValidateUserByToken = CognitoValidateUserByToken;
const DynamoValidateObject = (tableName, searchField, key, needed = false, sort) => __awaiter(void 0, void 0, void 0, function* () {
    const db = AWS_1.default.DynamoDB;
    try {
        const params = {
            TableName: tableName,
            Key: {
                [searchField]: key,
            }
        };
        if (sort)
            params.Key = { key, sort };
        const query = yield db.send(new client_dynamodb_1.GetItemCommand(params));
        if (query.Item) {
            if (needed != true) {
                throw Error('No se encontro el objecto');
            }
        }
        else {
            if (needed) {
                throw Error('No se encontro el objecto');
            }
        }
        return true;
    }
    catch (error) {
        throw error;
    }
});
exports.DynamoValidateObject = DynamoValidateObject;
const RDSValidateObject = (tablename, value, column, filter) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.mySQL.select(tablename, value, column, filter);
        if (result.length < 1) {
            throw new Error('Ningun objeto encontrado');
        }
        return true;
    }
    catch (error) {
        throw error;
    }
});
exports.RDSValidateObject = RDSValidateObject;
//# sourceMappingURL=aws.js.map