"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortCriteries = exports.getAccessToken = void 0;
const getAccessToken = (cookies, req) => {
    var _a;
    if (!cookies) {
        throw Error('Ningún token de acceso');
    }
    const access_token = (_a = Object.entries(cookies).find(([key, value]) => {
        return key.includes('accessToken');
    })) === null || _a === void 0 ? void 0 : _a[1];
    if (!access_token)
        throw Error('Ningun token de acceso');
    req.token = access_token;
    return true;
};
exports.getAccessToken = getAccessToken;
const sortCriteries = (req) => {
    var _a, _b;
    if ((_a = req.query) === null || _a === void 0 ? void 0 : _a.order) {
        if (!((_b = req.query) === null || _b === void 0 ? void 0 : _b.sort)) {
            throw Error('No se especifico el orden');
        }
    }
    return true;
};
exports.sortCriteries = sortCriteries;
//# sourceMappingURL=utils.js.map