"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateExtension = void 0;
const validateExtension = (extension, ...args) => {
    return (req, res, next) => {
        const catalogo = req.files;
        console.log(catalogo);
        next();
    };
};
exports.validateExtension = validateExtension;
