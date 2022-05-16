"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeaders = exports.transformExcelToJson = void 0;
const xlsx_1 = __importDefault(require("xlsx"));
const transformExcelToJson = (file, sheetName, callback) => {
    let sheet = xlsx_1.default.read(file.buffer, { sheetRows: 1000 });
    if (!sheet.SheetNames.includes(sheetName)) {
        return callback(`Error, El archivo no contiene la hoja llamada: ${sheetName}, Hojas disponibles: ${sheet.SheetNames} `);
    }
    const headerLine = (0, exports.findHeaders)(sheet.Sheets[sheetName]);
    return xlsx_1.default.utils.sheet_to_json(sheet.Sheets[sheetName], { range: headerLine, blankrows: false, dateNF: 'mm/yyyy' });
};
exports.transformExcelToJson = transformExcelToJson;
const findHeaders = (book) => {
    var range = xlsx_1.default.utils.decode_range(book["!ref"]);
    let targetRow = -1;
    for (var R = range.s.r; R <= range.e.r; ++R) {
        for (var C = range.s.c; C <= range.e.c; ++C) {
            var coord = xlsx_1.default.utils.encode_cell({ r: R, c: C }), cell = book[coord];
            if (!cell || !cell.v)
                continue;
            if (cell.t == "s") {
                if (cell.v.includes("Desc")) {
                    targetRow = Number(coord.at(-1)) - 1;
                    return targetRow;
                }
            }
        }
    }
    return targetRow;
};
exports.findHeaders = findHeaders;
//# sourceMappingURL=files.js.map