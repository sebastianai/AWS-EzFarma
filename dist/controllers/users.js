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
exports.createUser = exports.getUserInfo = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const AWS_1 = __importDefault(require("../AWS"));
const db_1 = require("../database/db");
const cognito = AWS_1.default.Cognito;
const db = db_1.mySQL;
const getUserInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const token = (_a = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))) === null || _a === void 0 ? void 0 : _a[1];
        const params = {
            AccessToken: token
        };
        const user = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand(params));
        let userData = {};
        (_b = user.UserAttributes) === null || _b === void 0 ? void 0 : _b.filter((att) => att.Name != 'sub').forEach((att) => {
            var _a;
            const key = (_a = att.Name) === null || _a === void 0 ? void 0 : _a.split(':').at(-1);
            userData[key] = att.Value;
        });
        return res.json({
            data: userData,
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false
        });
    }
});
exports.getUserInfo = getUserInfo;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const group = req.params.type;
    let { email, password, info, address } = req.body;
    const user = {
        email,
        password,
        info,
        address
    };
    const params = {
        UserPoolId: process.env.POOL_ID,
        Username: user.email,
        TemporaryPassword: `${user.info.enterpriseName.slice(0, 3)}@Cleppi${new Date().getDate()}`,
        UserAttributes: [
            {
                Name: 'email',
                Value: user.email
            },
            {
                Name: 'name',
                Value: user.info.name
            },
            {
                Name: 'address',
                Value: user.address
            },
            {
                Name: 'custom:enterpriseName',
                Value: user.info.enterpriseName
            },
            {
                Name: 'custom:rut',
                Value: user.info.rut
            }
        ]
    };
    try {
        const result = yield cognito.send(new client_cognito_identity_provider_1.AdminCreateUserCommand(params));
        yield cognito.send(new client_cognito_identity_provider_1.AdminAddUserToGroupCommand({
            GroupName: group,
            Username: (_c = result.User) === null || _c === void 0 ? void 0 : _c.Username,
            UserPoolId: process.env.POOL_ID
        }));
        yield new Promise((resolve, reject) => {
            db.db.query(`INSERT INTO ${group} (Nombre,RUT) VALUES (UPPER('${user.info.enterpriseName}'),UPPER('${user.info.rut}'));`, (err, data) => {
                if (err)
                    reject(err);
                resolve(data);
            });
        });
        return res.json({
            msg: "Operacion exitosa",
            data: result,
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
//# sourceMappingURL=users.js.map