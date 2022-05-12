"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({
            msg: 'Ningun token encontrado'
        });
    }
    ;
    if (!(0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY)) {
        return res.status(401).json({
            msg: 'Token invalido encontrado'
        });
    }
    ;
    next();
};
exports.verifyToken = verifyToken;
