"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidezArray = exports.compareStrings = void 0;
const string_similarity_1 = require("string-similarity");
const compareStrings = (string1, string2) => {
    return (0, string_similarity_1.compareTwoStrings)(string1, string2);
};
exports.compareStrings = compareStrings;
const getValidezArray = (cargas) => {
    let validez = [];
    let meses = [];
    const toLongDate = new Intl.DateTimeFormat("es-cl", { month: "long" });
    for (let index = 0; index < 3; index++) {
        const date = new Date();
        const previousMonth = new Date().setMonth(date.getMonth() - index);
        meses[date.getMonth() - index] = toLongDate.format(previousMonth);
    }
    Object.entries(meses).forEach(([key, value]) => {
        const mes = parseInt(key);
        const res = cargas.filter((range) => {
            const meses = range[1].getMonth() - range[0].getMonth() + (12 * (range[1].getFullYear() - range[0].getFullYear()));
            if (meses >= 1) {
                for (let index = 0; index <= meses; index++) {
                    if (range[0].getMonth() + index == mes) {
                        return true;
                    }
                }
                return false;
            }
            else {
                return range[0].getMonth() >= mes && range[1].getMonth() <= mes;
            }
        });
        if (res) {
            validez.push({ [value]: res });
        }
        else {
            validez.push({ [value]: null });
        }
    });
    const periodo = validez.reduce((acc, rango) => {
        var _a, _b, _c;
        for (let mes in rango) {
            acc[mes] = (_a = acc[mes]) !== null && _a !== void 0 ? _a : rango[mes];
            acc[mes] = (((_b = acc[mes]) === null || _b === void 0 ? void 0 : _b.length) > 1) ? acc[mes].sort((a, b) => a[1].getDate() > b[1].getDate() ? -1 : 1)[0] : (_c = acc[mes][0]) !== null && _c !== void 0 ? _c : [];
        }
        return acc;
    }, []);
    return periodo;
};
exports.getValidezArray = getValidezArray;
//# sourceMappingURL=utils.js.map