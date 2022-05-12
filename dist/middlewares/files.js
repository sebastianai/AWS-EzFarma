"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateExtension = void 0;
const validateExtension = (extension, ...args) => (req) => {
    var _a;
    if (!(req === null || req === void 0 ? void 0 : req.file) && !(req === null || req === void 0 ? void 0 : req.files)) {
        throw Error('Ningún archivo encontrado.');
    }
    if (req.file) {
        const filename = req.file.originalname;
        const fileExtension = (_a = filename.split('.').at(-1)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if (fileExtension != extension && !args.includes(fileExtension)) {
            throw Error(`El tipo de archivo ${fileExtension} no es compatible\nTIP: ${extension} ${args}`);
        }
        ;
    }
    return true;
};
exports.validateExtension = validateExtension;
