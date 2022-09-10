"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformHTMLToPDF = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pdf_creator_node_1 = __importDefault(require("pdf-creator-node"));
const pdfOptions = {
    width: '8in',
    formate: 'Letter',
    orientation: 'portrait',
    border: '3mm',
};
const transformHTMLToPDF = (data, filename, attrs) => {
    return new Promise((resolve, reject) => {
        var _a, _b, _c, _d, _e, _f;
        const html = fs_1.default.readFileSync(path_1.default.join(__dirname, '../assets/order.html'), { encoding: 'utf-8' });
        const file = filename + '_doc' + '.pdf';
        const bitmap = fs_1.default.readFileSync(path_1.default.join(__dirname, "../assets/LogoNegro.png"));
        const logo = bitmap.toString('base64');
        const subtotal = data.reduce((total, producto) => {
            total += producto.SUBTOTAL;
            return total;
        }, 0);
        const total = data.map((att) => att.TOTAL)[0];
        const obj = {
            prodlist: data,
            total,
            subtotal
        };
        const details = {
            purchaseID: data.map((att) => att.COMPRA)[0],
            customerId: (_a = attrs.find((attr) => attr.Name == 'sub')) === null || _a === void 0 ? void 0 : _a.Value,
            date: new Date(data.map((att) => att.FECHA)[0]).toLocaleDateString()
        };
        const document = {
            html: html,
            data: {
                logo: logo,
                ProductCarts: obj,
                details,
                user: {
                    name: (_b = attrs.find(({ Name }) => Name === null || Name === void 0 ? void 0 : Name.includes('name'))) === null || _b === void 0 ? void 0 : _b.Value,
                    rut: (_c = attrs.find(({ Name }) => Name === null || Name === void 0 ? void 0 : Name.includes('rut'))) === null || _c === void 0 ? void 0 : _c.Value,
                    enterpriseName: (_d = attrs.find(({ Name }) => Name === null || Name === void 0 ? void 0 : Name.includes('enterpriseName'))) === null || _d === void 0 ? void 0 : _d.Value,
                    adress: (_e = attrs.find(({ Name }) => Name == 'address')) === null || _e === void 0 ? void 0 : _e.Value,
                    email: (_f = attrs.find(({ Name }) => Name === null || Name === void 0 ? void 0 : Name.includes('email'))) === null || _f === void 0 ? void 0 : _f.Value,
                }
            },
            path: `./docs/${file}`,
        };
        pdf_creator_node_1.default.create(document, pdfOptions)
            .then((res) => {
            resolve(res);
        })
            .catch((err) => {
            reject(err);
        });
    });
};
exports.transformHTMLToPDF = transformHTMLToPDF;
//# sourceMappingURL=html-pdf.js.map