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
exports.createUser = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const db_1 = __importDefault(require("../database/db"));
const helpers_1 = require("../helpers");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, password, role } = req.body;
    password = helpers_1.bcrypt.encryptPassword(password);
    const user = {
        email,
        password,
        role
    };
    const params = {
        TableName: 'Users',
        Item: {
            "email": {
                S: user.email
            },
            "passoword": {
                S: user.password
            },
            "role": {
                M: JSON.stringify(user.role)
            }
        }
    };
    try {
        const data = yield db_1.default.send(new client_dynamodb_1.PutItemCommand(params));
        return res.json({
            msg: "Operacion exitosa",
            data,
            ok: true
        });
    }
    catch (error) {
        console.error("Error", error);
        return res.status(500).json({
            msg: 'Error en el servidor',
            ok: false
        });
    }
});
exports.createUser = createUser;
