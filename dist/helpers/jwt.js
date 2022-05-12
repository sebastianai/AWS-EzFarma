"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWT = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const createJWT = (payload) => {
    return new Promise((resolve, reject) => {
        (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, {
            expiresIn: '4h'
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
