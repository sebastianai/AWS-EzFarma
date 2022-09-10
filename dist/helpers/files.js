"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeaders = exports.transformExcelToCsv = exports.transformExcelToJson = void 0;
const xlsx_1 = __importDefault(require("xlsx"));
const transformExcelToJson = (file, sheetName, callback) => {
    let sheet = xlsx_1.default.read(file);
    if (!sheet.SheetNames.includes(sheetName)) {
        return callback(`Error, El archivo no contiene la hoja llamada: ${sheetName}, Hojas disponibles: ${sheet.SheetNames} `);
    }
    const headerLine = (0, exports.findHeaders)(sheet.Sheets[sheetName]);
    console.log(headerLine);
    return xlsx_1.default.utils.sheet_to_json(sheet.Sheets[sheetName], { header: headerLine, blankrows: false, defval: 0 });
};
exports.transformExcelToJson = transformExcelToJson;
const transformExcelToCsv = (file, sheetName, callback, sellType, category) => {
    let sheet = xlsx_1.default.read(file);
    if (!sheet.SheetNames.includes(sheetName)) {
        return callback(`Error, El archivo no contiene la hoja llamada: ${sheetName}, Hojas disponibles: ${sheet.SheetNames} `);
    }
    const headerLine = (0, exports.findHeaders)(sheet.Sheets[sheetName]);
    if (sellType && category) {
        let json = xlsx_1.default.utils.sheet_to_json(sheet.Sheets[sheetName], { header: headerLine, defval: '', raw: true, rawNumbers: true });
        json.forEach((obj) => {
            obj['Tipo Venta'] = sellType;
            obj['Tipo Producto'] = category || 0;
        });
        let newSheet = xlsx_1.default.utils.json_to_sheet(json);
        return xlsx_1.default.utils.sheet_to_csv(newSheet, { FS: ';', RS: '\n', dateNF: 'YYYY-MM-dd' });
    }
    else {
        return xlsx_1.default.utils.sheet_to_csv(sheet.Sheets[sheetName], { FS: ';', RS: '\n', dateNF: 'YYYY-MM-dd' });
    }
};
exports.transformExcelToCsv = transformExcelToCsv;
const findHeaders = (book) => {
    var range = xlsx_1.default.utils.decode_range(book["!ref"]);
    let targetRow = -1;
    for (var R = range.s.r; R <= range.e.r; ++R) {
        for (var C = range.s.c; C <= range.e.c; ++C) {
            var coord = xlsx_1.default.utils.encode_cell({ r: R, c: C }), cell = book[coord];
            if (!cell || !cell.v)
                continue;
            if (cell.t == "s") {
                if (cell.v.toUpperCase().includes("DESCRIPCIÓN") || cell.v.toUpperCase().includes("DESCRIPCION") || cell.v.toUpperCase().includes("DESC")) {
                    const [, row] = coord.match(/(\d)/i);
                    targetRow = Number(row);
                    return targetRow;
                }
            }
        }
    }
    return targetRow;
};
exports.findHeaders = findHeaders;
//# sourceMappingURL=files.js.map