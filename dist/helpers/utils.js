"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareStrings = void 0;
const string_similarity_1 = require("string-similarity");
const compareStrings = (string1, string2) => {
    return (0, string_similarity_1.compareTwoStrings)(string1, string2);
};
exports.compareStrings = compareStrings;
//# sourceMappingURL=utils.js.map