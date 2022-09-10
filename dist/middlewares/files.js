"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateExtension = void 0;
const validateExtension = (extension, ...args) => (req) => {
    var _a, _b;
    if (!((_b = (_a = req === null || req === void 0 ? void 0 : req.files) !== null && _a !== void 0 ? _a : req === null || req === void 0 ? void 0 : req.file) !== null && _b !== void 0 ? _b : undefined)) {
        throw Error('Ningún archivo encontrado.');
    }
    if (req.files) {
        req.files.forEach((elem) => {
            const fileName = elem.originalname;
            const results = fileName.split('.');
            const fileExtension = results[results.length - 1].toLowerCase();
            if (fileExtension != extension && !args.includes(fileExtension)) {
                throw Error(`El tipo de archivo ${fileExtension} no es compatible \n TIP: ${extension} ${args}`);
            }
            ;
        });
    }
    if (req.file) {
        const fileName = req.file.originalname;
        const fileExtension = fileName.split('.').at(-1).toLowerCase();
        if (fileExtension != extension && !args.includes(fileExtension)) {
            throw Error(`El tipo de archivo ${fileExtension} no es compatible \n TIP: ${extension} ${args}`);
        }
        ;
    }
    return true;
};
exports.validateExtension = validateExtension;
//# sourceMappingURL=files.js.map