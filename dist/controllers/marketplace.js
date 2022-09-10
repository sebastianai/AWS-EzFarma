"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBuys = exports.getOrderById = exports.getOrders = exports.generateOrder = exports.updateCart = exports.removeFromCart = exports.getCart = exports.addToCart = exports.getProductsByName = exports.getProductById = exports.getProducts = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const mysql_1 = __importDefault(require("mysql"));
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const SESClient = __importStar(require("@aws-sdk/client-ses"));
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
const nodemailer_1 = __importDefault(require("nodemailer"));
const adm_zip_1 = __importDefault(require("adm-zip"));
const AWS_1 = __importDefault(require("../AWS"));
const db_1 = require("../database/db");
const html_pdf_1 = require("../helpers/html-pdf");
const db = db_1.mySQL;
const cognito = AWS_1.default.Cognito;
const dynamodb = AWS_1.default.DynamoDB;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = req.query.page || '1';
        const { q, field } = req.query;
        let where = undefined;
        if (q && field) {
            where = { [field]: q };
        }
        let order = undefined;
        if (req.query.order && req.query.sort) {
            order = {
                [req.query.order]: req.query.sort
            };
        }
        const productsPerPage = 30;
        const from = (Number(page) == 1) ? 0 : (Number(page) - 1) * productsPerPage + 1;
        const [query, count] = yield db.selectAll('MARKET_Producto', from, productsPerPage, where, order);
        return res.json({
            count: count,
            range: [from, from + productsPerPage],
            data: query,
            ok: true
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        });
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id;
        const results = yield new Promise((resolve, reject) => {
            db.db.query(`CALL detalle_producto(?)`, id, (err, data, fields) => {
                if (err) {
                    return reject(err);
                }
                if (Array.isArray(data[0])) {
                    return resolve(data[0]);
                }
                else {
                    return resolve([]);
                }
            });
        });
        if (results.length === 0) {
            return res.status(404).json({
                msg: `Ningun producto encontrado con el id ${id}`,
                ok: false
            });
        }
        return res.json({
            data: results,
            ok: true
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        });
    }
});
exports.getProductById = getProductById;
const getProductsByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.query.name;
        const results = yield new Promise((resolve, reject) => {
            const query = mysql_1.default.raw("'" + name + "%'");
            db.db.query(`SELECT * FROM Catalogo_Producto WHERE DESCRIPCION LIKE ?;`, query, (err, data, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve(data);
            });
        });
        return res.json({
            data: results,
            ok: true
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        });
    }
});
exports.getProductsByName = getProductsByName;
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const producto = req.body;
        const token = (_a = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))) === null || _a === void 0 ? void 0 : _a[1];
        const userParams = {
            AccessToken: token
        };
        const user = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand(userParams));
        const cartParams = {
            TableName: 'Carro_Compra',
            Key: {
                'Username': {
                    S: user.Username
                }
            },
            ProjectionExpression: 'Productos'
        };
        //Obtener articulos del carrito
        let cart = yield dynamodb.send(new client_dynamodb_1.GetItemCommand(cartParams));
        let Productos;
        if (!cart.Item || Object.entries(cart.Item).length < 1) {
            Productos = [];
        }
        else {
            Productos = (0, util_dynamodb_1.unmarshall)(cart.Item).Productos;
        }
        if ((Productos === null || Productos === void 0 ? void 0 : Productos.length) > 0) {
            const exists = Productos.find((p) => p.PRODUCTO_ID === producto.PRODUCTO_ID && p.DESCRIPCION === producto.DESCRIPCION);
            if (exists) {
                exists.CANTIDAD = (exists.CANTIDAD || 0) + 1;
            }
            else {
                producto.CANTIDAD = 1;
                Productos.push(producto);
            }
        }
        else {
            producto.CANTIDAD = 1;
            Productos.push(producto);
        }
        const newProductos = (0, util_dynamodb_1.marshall)(Productos);
        let updateCart = {
            TableName: 'Carro_Compra',
            Key: {
                "Username": {
                    S: user.Username
                }
            },
            UpdateExpression: "SET Productos = :p",
            ExpressionAttributeValues: {
                ":p": {
                    L: newProductos
                },
            },
            ReturnValues: 'ALL_NEW'
        };
        const newCart = yield dynamodb.send(new client_dynamodb_1.UpdateItemCommand(updateCart));
        return res.json({
            msg: 'Producto añadido',
            data: (0, util_dynamodb_1.unmarshall)(newCart.Attributes),
            ok: true
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        });
    }
});
exports.addToCart = addToCart;
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    try {
        const token = (_b = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))) === null || _b === void 0 ? void 0 : _b[1];
        const userParams = {
            AccessToken: token
        };
        const user = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand(userParams));
        const cartParams = {
            TableName: 'Carro_Compra',
            Key: {
                'Username': {
                    S: user.Username
                }
            },
            ProjectionExpression: 'Productos'
        };
        const cart = yield dynamodb.send(new client_dynamodb_1.GetItemCommand(cartParams));
        return res.json({
            data: (_c = (0, util_dynamodb_1.unmarshall)(cart.Item).Productos) !== null && _c !== void 0 ? _c : [],
            ok: true
        });
    }
    catch (error) {
        return res.json({
            msg: error,
            ok: false
        });
    }
});
exports.getCart = getCart;
const removeFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        const i = req.query.index;
        const token = (_d = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))) === null || _d === void 0 ? void 0 : _d[1];
        const userParams = {
            AccessToken: token
        };
        const user = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand(userParams));
        const updateCart = {
            TableName: 'Carro_Compra',
            Key: {
                "Username": {
                    S: user.Username
                }
            },
            UpdateExpression: `REMOVE Productos[${i}]`,
            ConditionExpression: 'attribute_exists(Productos)',
            ReturnValues: 'ALL_NEW'
        };
        const result = yield dynamodb.send(new client_dynamodb_1.UpdateItemCommand(updateCart));
        return res.json({
            msg: 'Producto removido',
            data: (0, util_dynamodb_1.unmarshall)(result.Attributes),
            ok: true
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        });
    }
});
exports.removeFromCart = removeFromCart;
const updateCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    try {
        const productos = (0, util_dynamodb_1.marshall)(req.body);
        const token = (_e = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))) === null || _e === void 0 ? void 0 : _e[1];
        const userParams = {
            AccessToken: token
        };
        const user = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand(userParams));
        let updateCart = {
            TableName: 'Carro_Compra',
            Key: {
                "Username": {
                    S: user.Username
                }
            },
            UpdateExpression: "SET Productos = :p",
            ExpressionAttributeValues: {
                ":p": {
                    L: productos
                },
            },
            ReturnValues: 'ALL_NEW'
        };
        const cart = yield dynamodb.send(new client_dynamodb_1.UpdateItemCommand(updateCart));
        return res.json({
            data: (0, util_dynamodb_1.unmarshall)(cart.Attributes),
            ok: true
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        });
    }
});
exports.updateCart = updateCart;
const generateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f, _g, _h;
    try {
        const token = (_f = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))) === null || _f === void 0 ? void 0 : _f[1];
        const userParams = {
            AccessToken: token
        };
        let user = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand(userParams));
        const cartParams = {
            TableName: 'Carro_Compra',
            Key: {
                "Username": {
                    S: user.Username
                }
            },
            ProjectionExpression: 'Productos'
        };
        const cart = yield dynamodb.send(new client_dynamodb_1.GetItemCommand(cartParams));
        if (!cart.Item || (0, util_dynamodb_1.unmarshall)(cart.Item).length < 1) {
            return res.status(404).json({
                msg: 'No hay productos en el carrito',
                ok: false
            });
        }
        const rut = ((_h = (_g = user.UserAttributes) === null || _g === void 0 ? void 0 : _g.find(({ Name }) => Name === null || Name === void 0 ? void 0 : Name.includes('rut'))) === null || _h === void 0 ? void 0 : _h.Value) || '';
        const query = util_1.default.promisify(db.db.query).bind(db.db);
        const result = yield (() => __awaiter(void 0, void 0, void 0, function* () {
            try {
                //Obtener ID
                const result = yield query(`SELECT ID FROM Farmacias WHERE RUT = '${rut}'`);
                const order = (0, util_dynamodb_1.unmarshall)(cart.Item);
                //Calcular total de la compra
                let grandTotal = order.Productos.reduce((total, p) => {
                    total += p.CANTIDAD * ((p.PRECIO_OFERTA > 0 && p.PRECIO_OFERTA < p.PRECIO) ? p.PRECIO_OFERTA : p.PRECIO);
                    return total;
                }, 0);
                //Insertar nueva compra
                let [, Query] = yield query(`INSERT INTO Compra(TOTAL) VALUES (${grandTotal.toFixed(2)});SELECT LAST_INSERT_ID() AS COMPRA_ID FROM Compra;`);
                const compraID = Query[0].COMPRA_ID;
                const droguerias = order.Productos.reduce((droguerias, p) => {
                    droguerias[p.NOMBRE] = droguerias[p.NOMBRE] || [];
                    droguerias[p.NOMBRE].push(p);
                    return droguerias;
                }, {});
                //Generar ordenes de compra
                yield Promise.all(Object.entries(droguerias).map(([d, p]) => __awaiter(void 0, void 0, void 0, function* () {
                    var _j;
                    const totalOrder = p.reduce((total, p) => {
                        total += p.CANTIDAD * ((p.PRECIO_OFERTA > 0 && p.PRECIO_OFERTA < p.PRECIO) ? p.PRECIO_OFERTA : p.PRECIO);
                        return total;
                    }, 0);
                    let [, Query] = yield query(`INSERT INTO Ordenes(NOMBRE,FARMACIA_ID,GRANDTOTAL,ID_COMPRA) VALUES('${d}','${(_j = result[0]) === null || _j === void 0 ? void 0 : _j.ID}',${totalOrder.toFixed(2)},${compraID});SELECT LAST_INSERT_ID() AS ORDEN_ID FROM Ordenes;`);
                    const orderID = Query[0].ORDEN_ID;
                    p.map((p) => __awaiter(void 0, void 0, void 0, function* () {
                        const subtotal = p.CANTIDAD * ((p.PRECIO_OFERTA > 0 && p.PRECIO_OFERTA < p.PRECIO) ? p.PRECIO_OFERTA : p.PRECIO);
                        yield query(`INSERT INTO Orden_Producto(ORDER_ID,PRODUCTO_ID,CANTIDAD,PRECIO,TOTAL) VALUES(${orderID},'${p.PRODUCTO_ID}',${p.CANTIDAD},${(p.PRECIO_OFERTA > 0 && p.PRECIO_OFERTA < p.PRECIO) ? p.PRECIO_OFERTA : p.PRECIO},${subtotal})`);
                    }));
                })));
                return yield query(`SELECT * FROM orden_compra WHERE COMPRA = ${compraID};`);
            }
            catch (error) {
                console.log(error);
                return [];
            }
        }))();
        if (result.length < 1)
            return res.status(404).json({ msg: 'Usuario no encontrado', ok: false });
        const bills = result.reduce((droguerias, p) => {
            droguerias[p.ORDEN] = droguerias[p.ORDEN] || [];
            droguerias[p.ORDEN].push(p);
            return droguerias;
        }, {});
        const zip = new adm_zip_1.default();
        let files = [];
        for (let bill in bills) {
            const { filename } = yield (0, html_pdf_1.transformHTMLToPDF)(bills[bill], bills[bill][0].DROGUERIA + user.Username, user.UserAttributes);
            files.push(filename);
            zip.addLocalFile(filename);
        }
        const zipFileContents = zip.toBuffer();
        res.writeHead(200, {
            'Content-Disposition': `attachment; filename="orders.zip"`,
            'Content-Type': 'application/zip',
        });
        return res.end(zipFileContents, () => {
            dynamodb.send(new client_dynamodb_1.UpdateItemCommand({
                TableName: 'Carro_Compra',
                Key: {
                    "Username": {
                        S: user.Username
                    }
                },
                UpdateExpression: 'REMOVE Productos '
            }));
            files.forEach((path) => {
                fs_1.default.unlink(path, (err) => {
                    if (err)
                        console.error(err);
                });
            });
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: error,
            ok: false
        });
    }
});
exports.generateOrder = generateOrder;
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _k;
    try {
        const token = (_k = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))) === null || _k === void 0 ? void 0 : _k[1];
        const userParams = {
            AccessToken: token
        };
        const user = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand(userParams));
        const results = yield new Promise((resolve, reject) => {
            var _a, _b;
            const rut = (_b = (_a = user.UserAttributes) === null || _a === void 0 ? void 0 : _a.find((att) => { var _a; return (_a = att.Name) === null || _a === void 0 ? void 0 : _a.includes('rut'); })) === null || _b === void 0 ? void 0 : _b.Value;
            db.db.query('SELECT ID FROM Farmacias WHERE RUT = ?;', rut, (err, data) => {
                var _a;
                if (!data || data.length < 1)
                    return res.status(404).json({ msg: 'Usuario no encontrado, contacte con el administrador', ok: false });
                const ID = (_a = data[0]) === null || _a === void 0 ? void 0 : _a.ID;
                const page = req.query.page || '1';
                //Criterios de busqueda
                let order = undefined;
                let date = undefined;
                let name = undefined;
                let estado = undefined;
                if (req.query.order && req.query.sort) {
                    order = {
                        [req.query.order]: req.query.sort
                    };
                }
                if (req.query.start && req.query.end) {
                    const start = new Date(req.query.start).toISOString();
                    const end = new Date(req.query.end + ' 23:59:59').toISOString();
                    date = [start, end];
                }
                if (req.query.name) {
                    name = req.query.name;
                }
                if (req.query.state) {
                    estado = req.query.state;
                }
                const range = (date) ? `AND FECHA BETWEEN CAST('${date[0]}' AS DATETIME) AND CAST('${date[1]}' AS DATETIME)` : '';
                const orderby = (order) ? `ORDER BY ${Object.keys(order)} ${Object.values(order)}` : '';
                const where = () => {
                    if (name || estado) {
                        let where = '';
                        if (name) {
                            where += `AND DROGUERIA LIKE '${name}%'`;
                        }
                        if (estado) {
                            where += `AND ESTADO = '${estado}'`;
                        }
                        return where;
                    }
                    else {
                        return '';
                    }
                };
                //Rango de busqueda
                const itemsPerPage = 30;
                const from = (Number(page) == 1) ? 0 : (Number(page) - 1) * itemsPerPage + 1;
                db.db.query(`SELECT COUNT(*) AS TOTAL FROM orden_compra WHERE ID = ? ${where()} ${range} GROUP BY ORDEN ${orderby};SELECT * FROM orden_compra WHERE ID = ? ${where()} ${range}GROUP BY ORDEN  ${orderby}  LIMIT ?,?;`, [ID, ID, from, itemsPerPage], (err, data) => {
                    if (err || !data)
                        return reject(err !== null && err !== void 0 ? err : 'Ningun dato encontrado');
                    const [{ TOTAL }] = data[0];
                    resolve([TOTAL, data[1]]);
                });
            });
        });
        return res.json({
            count: results === null || results === void 0 ? void 0 : results[0],
            data: results === null || results === void 0 ? void 0 : results[1],
            ok: true
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        });
    }
});
exports.getOrders = getOrders;
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _l, _m, _o;
    try {
        const ordenID = req.params['id'];
        const email = JSON.parse(req.query.email);
        const token = (_l = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))) === null || _l === void 0 ? void 0 : _l[1];
        const userParams = {
            AccessToken: token
        };
        const user = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand(userParams));
        const results = yield new Promise((resolve, reject) => {
            var _a, _b;
            const rut = (_b = (_a = user.UserAttributes) === null || _a === void 0 ? void 0 : _a.find((att) => { var _a; return (_a = att.Name) === null || _a === void 0 ? void 0 : _a.includes('rut'); })) === null || _b === void 0 ? void 0 : _b.Value;
            db.db.query('SELECT ID FROM Farmacias WHERE RUT = ?;', rut, (err, data) => {
                if (!data || data.length < 1)
                    return res.status(404).json({ msg: 'Usuario no encontrado, contacte con el administrador', ok: false });
                const [{ ID }] = data;
                db.db.query(`SELECT * FROM orden_compra WHERE ORDEN = ? AND ID = ? LIMIT 1;`, [ordenID, ID], (err, data) => {
                    if (err)
                        reject(err);
                    resolve(data);
                });
            });
        });
        const { filename } = yield (0, html_pdf_1.transformHTMLToPDF)(results, user.Username, user.UserAttributes);
        if (email) {
            const userEmail = (_o = (_m = user.UserAttributes) === null || _m === void 0 ? void 0 : _m.find(({ Name }) => Name == 'email')) === null || _o === void 0 ? void 0 : _o.Value;
            const ses = AWS_1.default.SES;
            const transporter = nodemailer_1.default.createTransport({
                SES: { ses, aws: SESClient },
            });
            const attachment = {
                filename: 'order.pdf',
                path: filename
            };
            transporter.sendMail({
                from: 'no-reply@cleppi.cl',
                to: userEmail,
                subject: `Tu órden generada en Cleppi.cl`,
                attachments: [attachment]
            }, (err, _) => {
                if (err)
                    throw err;
            });
            return res.json({
                msg: 'Orden enviada por correo electronico',
                ok: true
            });
        }
        return res.download(filename, (err) => {
            if (err)
                throw err;
            fs_1.default.unlink(filename, (err) => {
                if (err)
                    throw err;
            });
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        });
    }
});
exports.getOrderById = getOrderById;
const getBuys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _p;
    try {
        const token = (_p = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))) === null || _p === void 0 ? void 0 : _p[1];
        const userParams = {
            AccessToken: token
        };
        const user = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand(userParams));
        const results = yield new Promise((resolve, reject) => {
            var _a, _b;
            const rut = (_b = (_a = user.UserAttributes) === null || _a === void 0 ? void 0 : _a.find((att) => { var _a; return (_a = att.Name) === null || _a === void 0 ? void 0 : _a.includes('rut'); })) === null || _b === void 0 ? void 0 : _b.Value;
            db.db.query('SELECT ID FROM Farmacias WHERE RUT = ?;', rut, (err, data) => {
                if (!data || data.length < 1)
                    return res.status(404).json({ msg: 'Usuario no encontrado, contacte con el administrador', ok: false });
                const [{ ID }] = data;
                const page = req.query.page || '1';
                let order = undefined;
                if (req.query.order && req.query.sort) {
                    order = {
                        [req.query.order]: req.query.sort
                    };
                }
                let date = undefined;
                if (req.query.start && req.query.end) {
                    const start = new Date(req.query.start).toISOString();
                    const end = new Date(req.query.end).toISOString();
                    date = [start, end];
                }
                let name = undefined;
                if (req.query.name) {
                    name = req.query.name;
                }
                const range = (date) ? `AND FECHA BETWEEN CAST('${date[0]}' AS DATETIME) AND CAST('${date[1]}' AS DATETIME)` : '';
                const orderby = (order) ? `ORDER BY ${Object.keys(order)} ${Object.values(order)}` : '';
                const where = (name) ? `AND DROGUERIA LIKE '${name}%'` : '';
                const itemsPerPage = 30;
                const from = (Number(page) == 1) ? 0 : (Number(page) - 1) * itemsPerPage + 1;
                db.db.query(`SELECT COUNT(*) AS TOTAL FROM orden_compra WHERE ID = ? ${where} ${range} ${orderby};SELECT * FROM orden_compra WHERE ID = ? ${where} ${range} ${orderby} LIMIT ?,?;`, [ID, ID, from, itemsPerPage], (err, data) => {
                    if (err)
                        reject(err);
                    const [{ TOTAL }] = data[0];
                    resolve([TOTAL, data[1]]);
                });
            });
        });
        const groupedResult = results[1].reduce((compra, { COMPRA, DROGUERIA, FECHA, TOTAL, ESTADO }, i) => {
            var _a, _b;
            if (compra.some((compra) => compra.ID_COMPRA == COMPRA)) {
                const newCompra = compra.find((compra) => compra.ID_COMPRA == COMPRA);
                newCompra.ORDENES = (_a = newCompra.ORDENES) !== null && _a !== void 0 ? _a : [];
                newCompra.ORDENES.push(DROGUERIA);
                newCompra.ORDENES = [...new Set(newCompra.ORDENES)];
                newCompra.ESTADO = (_b = newCompra.ESTADO) !== null && _b !== void 0 ? _b : [];
                newCompra.ESTADO.push(ESTADO);
                newCompra.ESTADO = [...new Set(newCompra.ESTADO)];
            }
            else {
                compra.push({ ID_COMPRA: COMPRA, ESTADO: [ESTADO], FECHA_CRECION: FECHA, ORDENES: [DROGUERIA], TOTAL: TOTAL });
            }
            return compra;
        }, []);
        return res.json({
            count: results[0],
            data: groupedResult,
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: error,
            ok: false
        });
    }
});
exports.getBuys = getBuys;
//# sourceMappingURL=marketplace.js.map