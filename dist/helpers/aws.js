"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArrToBatch = void 0;
const utils_1 = require("./utils");
const transformArrToBatch = (item, options) => {
    let items = {};
    item.forEach((item) => {
        const dynamoAttributes = transformObjToItem(item);
        const [, attribute] = Object.entries(dynamoAttributes)
            .filter(([key]) => (0, utils_1.compareStrings)(key, options.KeySchema) > 0.5)
            .shift();
        items[Object.values(attribute).pop()] = {
            M: dynamoAttributes
        };
    });
    let Item = {
        "Nombre": { S: options.Name },
        "Catalogo-Nombre": { S: options.Drogstore },
        "Productos": { M: items }
    };
    let PutRequest = {
        Item
    };
    return PutRequest;
};
exports.transformArrToBatch = transformArrToBatch;
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