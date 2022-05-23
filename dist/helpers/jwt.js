"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExpJWT = exports.createJWT = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const createJWT = (...payload) => {
    return new Promise((resolve, reject) => {
        (0, jsonwebtoken_1.sign)({ payload }, process.env.JWT_KEY, {
            expiresIn: process.env.JWT_EXPIRE
        }, (err, token) => {
            if (err) {
                console.error(err);
                reject('The token was not created');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.createJWT = createJWT;
const checkExpJWT = (token) => {
    const jwt = (0, jsonwebtoken_1.decode)(token);
    const now = Math.floor(Date.now() / 1000);
    if (jwt.exp < now) {
        return false;
    }
    return true;
};
exports.checkExpJWT = checkExpJWT;
//# sourceMappingURL=jwt.js.map