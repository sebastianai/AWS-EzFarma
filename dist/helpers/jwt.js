"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWT = exports.checkExpJWT = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const checkExpJWT = (token) => {
    const jwt = (0, jsonwebtoken_1.decode)(token);
    const now = Math.floor(Date.now() / 1000);
    if (jwt.exp < now) {
        return false;
    }
    return true;
};
exports.checkExpJWT = checkExpJWT;
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
//# sourceMappingURL=jwt.js.map