"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadList = void 0;
const uploadList = (req, res) => {
    console.log(req.file);
    return res.json({
        msg: 'ok'
    });
};
exports.uploadList = uploadList;
