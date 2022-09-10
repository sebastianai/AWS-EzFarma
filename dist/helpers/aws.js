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
exports.getUser = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const AWS_1 = __importDefault(require("AWS"));
const getUser = (token, pool) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cognito = AWS_1.default.Cognito;
        const username = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand({
            AccessToken: token
        }));
        const user = yield cognito.send(new client_cognito_identity_provider_1.AdminGetUserCommand({
            Username: username.Username,
            UserPoolId: process.env.POOL_ID
        }));
        return user;
    }
    catch (error) {
        return null;
    }
});
exports.getUser = getUser;
//# sourceMappingURL=aws.js.map