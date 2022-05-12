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
exports.listTables = exports.createTable = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const AWS_1 = __importDefault(require("../AWS"));
const db = AWS_1.default.DynamoDB;
const createTable = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield db.send(new client_dynamodb_1.CreateTableCommand(params));
        console.log("Table Created", data);
        return data;
    }
    catch (err) {
        console.log("Error", err);
    }
});
exports.createTable = createTable;
const listTables = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield db.send(new client_dynamodb_1.ListTablesCommand(params));
        console.log("Table Created", data);
        return data;
    }
    catch (err) {
        console.log("Error", err);
    }
});
exports.listTables = listTables;
exports.default = db;
