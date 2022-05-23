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
exports.updateCart = exports.getLists = exports.uploadList = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const jsonwebtoken_1 = require("jsonwebtoken");
const AWS_1 = __importDefault(require("../AWS"));
const helpers_1 = require("../helpers");
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
const db = AWS_1.default.DynamoDB;
const document = AWS_1.default.DocumentClient;
const uploadList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = Object.entries(req.query);
        const Catalogos = queryParams.filter(([param]) => param.includes("Catalogo"))
            .map((elem) => elem[1]);
        const Droguerias = queryParams.filter(([param]) => param.includes("Drogueria"))
            .map((elem) => elem[1]);
        const { payload } = (0, jsonwebtoken_1.decode)(req.headers.token);
        const [, enterpriseName] = payload;
        let batchRequest = [];
        req.files.forEach((elem, i) => {
            const catalogoJson = helpers_1.files.transformExcelToJson(elem, Catalogos[i], (err) => {
                if (err)
                    throw Error(err);
            });
            const Record = {
                'Nombre': enterpriseName,
                "Catalogo-Nombre": Droguerias[i],
                "Pagina": Catalogos[i],
                "Productos": catalogoJson
            };
            const PutRequest = {
                Item: (0, util_dynamodb_1.marshall)(Record)
            };
            batchRequest.push({ PutRequest: PutRequest });
            console.log(catalogoJson.length);
        });
        const params = {
            RequestItems: {
                Farmacias: batchRequest
            }
        };
        const result = yield db.send(new client_dynamodb_1.BatchWriteItemCommand(params));
        return res.json({
            data: result,
            ok: true,
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: error === null || error === void 0 ? void 0 : error.message,
            ok: false,
        });
    }
});
exports.uploadList = uploadList;
const getLists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const catalogo = req.params.catalogo;
        const { payload } = (0, jsonwebtoken_1.decode)(req.headers.token);
        const [email, enterpriseName] = payload;
        const params = {
            RequestItems: {
                "Farmacias": {
                    Keys: [
                        {
                            "Nombre": { S: enterpriseName },
                            "Catalogo-Nombre": { S: catalogo }
                        }
                    ]
                }
            }
        };
        const results = yield db.send(new client_dynamodb_1.BatchGetItemCommand(params));
        return res.json({
            data: results,
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: error === null || error === void 0 ? void 0 : error.message,
            ok: false,
        });
    }
});
exports.getLists = getLists;
const updateCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.updateCart = updateCart;
//# sourceMappingURL=pharmacy.js.map