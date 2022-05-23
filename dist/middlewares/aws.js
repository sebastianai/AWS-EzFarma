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
exports.validateObject = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const AWS_1 = __importDefault(require("../AWS"));
const validateIAMUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
});
const validateObject = (tableName, searchField, key, needed = false, sort) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.validateObject = validateObject;
//# sourceMappingURL=aws.js.map