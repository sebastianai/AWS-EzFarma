"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateExtension = void 0;
const validateExtension = (extension, ...args) => (req) => {
    if (!(req === null || req === void 0 ? void 0 : req.files)) {
        throw Error('Ningún archivo encontrado.');
    }
    if (req.files) {
        req.files.forEach((elem) => {
            const fileName = elem.originalname;
            const fileExtension = fileName.split('.').at(-1).toLowerCase();
            if (fileExtension != extension && !args.includes(fileExtension)) {
                throw Error(`El tipo de archivo ${fileExtension} no es compatible \n TIP: ${extension} ${args}`);
            }
            ;
        });
    }
    return true;
};
exports.validateExtension = validateExtension;
//# sourceMappingURL=files.js.map