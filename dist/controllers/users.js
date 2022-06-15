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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.renewToken = exports.logout = exports.login = exports.createUser = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const jsonwebtoken_1 = require("jsonwebtoken");
const db_1 = require("../database/db");
const AWS_1 = __importDefault(require("../AWS"));
const bcrypt_1 = require("../helpers/bcrypt");
const jwt_1 = require("../helpers/jwt");
const cognito = AWS_1.default.Cognito;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, Role } = req.body;
    const pool = req.params.pool || "us-east-1_BUezKKPSG";
    const params = {
        Username: email,
        UserPoolId: pool,
        DesiredDeliveryMediums: ["EMAIL"],
        TemporaryPassword: "Abc@321",
        UserAttributes: [
            {
                Name: "custom:enterpriseName",
                Value: Role.enterpriseName,
            },
            {
                Name: "name",
                Value: Role.name,
            },
            {
                Name: "email",
                Value: email,
            },
        ],
    };
    try {
        const data = yield cognito.send(new client_cognito_identity_provider_1.AdminCreateUserCommand(params));
        return res.json({
            msg: "Operacion exitosa",
            data,
            ok: true,
        });
    }
    catch (error) {
        console.error("Error", error);
        return res.status(500).json({
            msg: error,
            ok: false,
        });
    }
});
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, password } = req.body;
    const query = {
        TableName: "Users",
        Key: {
            email: email,
        },
    };
    const result = (yield (yield db_1.document.send(new lib_dynamodb_1.GetCommand(query))).Item);
    if (!(result === null || result === void 0 ? void 0 : result.password) || !(result === null || result === void 0 ? void 0 : result.email)) {
        return res.status(502).json({
            msg: "Usuario invalido",
            ok: false,
        });
    }
    if (!(0, bcrypt_1.comparePassword)(password, result.password)) {
        return res.status(400).json({
            msg: "Usuario o contraseñas inválidas",
            ok: false,
        });
    }
    const token = yield (0, jwt_1.createJWT)(result.email, result.Role.enterpriseName);
    let { password: drop } = result, user = __rest(result, ["password"]);
    return res.cookie("token", token, { httpOnly: true, secure: true }).json({
        data: user,
        token,
        ok: true,
    });
});
exports.login = login;
const logout = (req, res) => {
    return res.clearCookie("token").end();
};
exports.logout = logout;
const renewToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies["token"];
    if (!(0, jwt_1.checkExpJWT)(token)) {
        const { payload } = (0, jsonwebtoken_1.decode)(token);
        const newToken = yield (0, jwt_1.createJWT)(payload[0]);
        return res
            .cookie("token", newToken, { httpOnly: true, secure: true })
            .json({
            token: newToken,
            ok: true,
        });
    }
    return res.json({
        token,
        ok: true,
    });
});
exports.renewToken = renewToken;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies["token"] || req.headers["token"];
    if ((0, jwt_1.checkExpJWT)(token)) {
        const { payload } = (0, jsonwebtoken_1.decode)(token);
        const [email] = payload;
        const params = {
            TableName: "Users",
            Key: { email: email },
        };
        const result = yield db_1.document.send(new lib_dynamodb_1.GetCommand(params));
        if (!result) {
            return res.status(400).json({
                msg: `No se encontro un usuario con el correo`,
                ok: false,
            });
        }
        const _a = result.Item, { password } = _a, user = __rest(_a, ["password"]);
        return res.json({
            data: user,
            ok: true,
        });
    }
});
exports.getUser = getUser;
//# sourceMappingURL=users.js.map