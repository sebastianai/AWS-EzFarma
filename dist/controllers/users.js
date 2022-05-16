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
exports.renewToken = exports.login = exports.createUser = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const jsonwebtoken_1 = require("jsonwebtoken");
const db_1 = __importDefault(require("../database/db"));
const helpers_1 = require("../helpers");
const bcrypt_1 = require("../helpers/bcrypt");
const jwt_1 = require("../helpers/jwt");
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
            "password": {
                S: user.password
            },
            "role": {
                M: JSON.parse(JSON.stringify(user.role))
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
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { email, password } = req.body;
    const query = {
        TableName: 'Users',
        Key: {
            "email": {
                S: email
            }
        }
    };
    const result = yield db_1.default.send(new client_dynamodb_1.GetItemCommand(query));
    if (!((_a = result.Item) === null || _a === void 0 ? void 0 : _a.password) || !((_b = result.Item) === null || _b === void 0 ? void 0 : _b.email)) {
        return res.status(502).json({
            msg: 'Usuario invalido'
        });
    }
    if (!(0, bcrypt_1.comparePassword)(password, result.Item.password.S)) {
        return res.status(400).json({
            msg: 'Usuario o contraseñas inválidas',
            ok: false
        });
    }
    const token = yield (0, jwt_1.createJWT)(result.Item.email.S, (_c = result.Item.Role.M) === null || _c === void 0 ? void 0 : _c.enterpriseName.S);
    return res.json({
        token
    });
});
exports.login = login;
const renewToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers['token'];
    if (!(0, jwt_1.checkExpJWT)(token)) {
        const { payload } = (0, jsonwebtoken_1.decode)(token);
        const newToken = yield (0, jwt_1.createJWT)(payload[0]);
        return res.json({
            token: newToken
        });
    }
    return res.json({
        token
    });
});
exports.renewToken = renewToken;
//# sourceMappingURL=users.js.map