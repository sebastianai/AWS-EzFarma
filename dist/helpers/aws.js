"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transformObjToItem = (obj) => {
    let map = {};
    Object.entries(obj).forEach(([key, value]) => {
        map[`${key}`] = checkType(value);
    });
    return map;
};
const checkType = (value) => {
    switch (typeof value) {
        case "string":
            return { S: value };
        case "number":
            return { N: value.toString() };
        case "boolean":
            return { BOOL: value };
        default:
            return { S: value };
    }
};
//# sourceMappingURL=aws.js.map