"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.encryptPassword = void 0;
const bcrypt_1 = require("bcrypt");
const encryptPassword = (password) => {
    const salt = (0, bcrypt_1.genSaltSync)(10);
    const hashedPassword = (0, bcrypt_1.hashSync)(password, salt);
    return hashedPassword;
};
exports.encryptPassword = encryptPassword;
const comparePassword = (password, hashedPsasword) => {
    return (0, bcrypt_1.compareSync)(password, hashedPsasword);
};
exports.comparePassword = comparePassword;
//# sourceMappingURL=bcrypt.js.map