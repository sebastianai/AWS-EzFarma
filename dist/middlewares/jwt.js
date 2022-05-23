"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyToken = (token) => {
    if (!token) {
        throw Error('Ningun token encontrado');
    }
    ;
    if (!(0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY)) {
        throw Error('Token invalido encontrado');
    }
    ;
    return true;
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.js.map