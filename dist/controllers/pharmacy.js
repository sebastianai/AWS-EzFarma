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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = exports.getLists = exports.uploadList = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _ = __importStar(require("lodash"));
const db_1 = require("../database/db");
const AWS_1 = __importDefault(require("../AWS"));
const helpers_1 = require("../helpers");
const server_1 = __importDefault(require("../server/server"));
const db = AWS_1.default.DynamoDB;
const cognito = AWS_1.default.Cognito;
const uploadList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { Drogueria, Pagina, Valido_desde, Valido_hasta } = req.body;
        const token = (_a = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))) === null || _a === void 0 ? void 0 : _a[1];
        const user = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand({ AccessToken: token }));
        const { Value: enterpriseName } = (_b = user.UserAttributes) === null || _b === void 0 ? void 0 : _b.find(({ Name }) => Name === null || Name === void 0 ? void 0 : Name.includes('enterpriseName'));
        let batchRequest = [];
        let progress = 0;
        const reportProgress = setInterval(() => {
            if (progress < 80) {
                progress++;
                server_1.default.socket.emit('upload', progress);
            }
            else {
                clearInterval(reportProgress);
            }
        }, 10000);
        const chunkSize = 500;
        req.files.forEach((elem, i) => {
            const catalogoJson = helpers_1.files.transformExcelToJson(elem.buffer, Pagina, (err) => {
                if (err)
                    throw Error(err);
            });
            console.log(catalogoJson);
            const chunks = _.chunk(catalogoJson, chunkSize);
            chunks.forEach((chunk, part) => __awaiter(void 0, void 0, void 0, function* () {
                // console.log(marshall(chunk))
                // const updateCatalogo:UpdateItemCommandInput = {
                //   TableName:"Farmacias",
                //   Key:{
                //     "Nombre":{
                //       S:enterpriseName!
                //     },
                //     "Catalogo-Nombre":Drogueria
                //   },
                //   UpdateExpression : "SET #attrName = list_append(#attrName, :attrValue)",
                //   ExpressionAttributeNames: {
                //    "#attrName" : "Productos"
                //   },
                //   ExpressionAttributeValues: {
                //    ":attrValue" : {
                //     L: [...marshall(chunk) as unknown as []]
                //    }
                //   }
                // }
                // await db.send( new UpdateItemCommand(updateCatalogo))
            }));
            // const Item: any = {
            //   "Nombre": enterpriseName,
            //   "Catalogo-Nombre": Drogueria,
            //   "Productos": catalogoJson,
            //   "Valido-desde": Valido_desde,
            //   "Valido-hasta": Valido_hasta
            // }
            // const PutRequest = {
            //   Item: marshall(Item)
            // }
            // batchRequest.push({ PutRequest })
        });
        // const params: BatchWriteItemCommandInput = {
        //   RequestItems: {
        //     Farmacias: batchRequest
        //   }
        // }
        // const result = await db.send(new BatchWriteItemCommand(params));
        progress = 100;
        server_1.default.socket.emit('upload', progress);
        return res.json({
            ok: true,
        });
    }
    catch (error) {
        server_1.default.socket.emit('upload', 0);
        return res.status(500).json({
            msg: error === null || error === void 0 ? void 0 : error.message,
            ok: false,
        });
    }
});
exports.uploadList = uploadList;
const getLists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d, _e;
    try {
        const token = (_c = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))) === null || _c === void 0 ? void 0 : _c[1];
        const user = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand({ AccessToken: token }));
        const rut = (_e = (_d = user.UserAttributes) === null || _d === void 0 ? void 0 : _d.find(({ Name }) => Name === null || Name === void 0 ? void 0 : Name.includes('rut'))) === null || _e === void 0 ? void 0 : _e.Value;
        const result = yield new Promise((resolve, reject) => db_1.mySQL.db.query('CALL catalogos_farmacia(?);', rut, ((err, data) => {
            if (err || !data)
                reject(err !== null && err !== void 0 ? err : 'Sin catalogos');
            resolve(data[0]);
        })));
        //Transformar resultado
        // const droguerias = result.reduce((droguerias: catalogos_farmacia[] , drogueria) => {
        //   const idx = droguerias.findIndex((d) => d.NOMBRE == drogueria.NOMBRE)
        //   if(idx != -1){
        //     const desde = droguerias[idx].VALIDO_DESDE
        //     const hasta = droguerias[idx].VALIDO_HASTA
        //     if(Array.isArray(desde)){
        //       desde.push(drogueria.VALIDO_DESDE as Date)
        //       droguerias[idx].VALIDO_DESDE = [...desde]
        //     }else{
        //       droguerias[idx].VALIDO_DESDE = [drogueria.VALIDO_DESDE as Date]
        //     }
        //     if(Array.isArray(hasta)){
        //       hasta.push(drogueria.VALIDO_HASTA as Date)
        //       droguerias[idx].VALIDO_HASTA = [...hasta]
        //     }else{
        //       droguerias[idx].VALIDO_HASTA = [drogueria.VALIDO_HASTA as Date]
        //     }
        //     (droguerias[idx].VALIDO_DESDE as Date[]).sort();
        //     (droguerias[idx].VALIDO_HASTA as Date[]).sort();
        //   }
        //   const {VALIDO_DESDE,VALIDO_HASTA,...data} = drogueria
        //   droguerias.push({...data,VALIDO_DESDE:[VALIDO_DESDE as Date],VALIDO_HASTA:[VALIDO_HASTA as Date]})
        //   return droguerias;
        // }, [])
        const droguerias = result.map((_a) => {
            var { VALIDO_DESDE, VALIDO_HASTA } = _a, data = __rest(_a, ["VALIDO_DESDE", "VALIDO_HASTA"]);
            return Object.assign(Object.assign({}, data), { VALIDEZ: [VALIDO_DESDE, VALIDO_HASTA] });
        }).reduce((droguerias, catalogo) => {
            const c = droguerias.findIndex((d) => d.NOMBRE == catalogo.NOMBRE);
            if (c != -1) {
                droguerias[c].VALIDEZ = [...droguerias[c], catalogo.VALIDEZ];
            }
            else {
                droguerias.push({
                    NOMBRE: catalogo.NOMBRE,
                    FECHA_CARGA: catalogo.FECHA_CARGA,
                    VALIDEZ: [catalogo.VALIDEZ]
                });
            }
            return droguerias;
        }, []).map((catalogo) => {
            return {
                NOMBRE: catalogo.NOMBRE,
                FECHA_CARGA: catalogo.FECHA_CARGA,
                VALIDEZ: Object.assign({}, helpers_1.utils.getValidezArray(catalogo.VALIDEZ))
            };
        });
        return res.json({
            data: {
                CATALOGOS: droguerias
            },
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: error === null || error === void 0 ? void 0 : error.message,
            ok: false,
        });
    }
});
exports.getLists = getLists;
const getStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f, _g, _h;
    try {
        const token = (_f = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))) === null || _f === void 0 ? void 0 : _f[1];
        const user = yield cognito.send(new client_cognito_identity_provider_1.GetUserCommand({ AccessToken: token }));
        const rut = (_h = (_g = user.UserAttributes) === null || _g === void 0 ? void 0 : _g.find(({ Name }) => Name === null || Name === void 0 ? void 0 : Name.includes('rut'))) === null || _h === void 0 ? void 0 : _h.Value;
        db_1.mySQL.db.query('CALL STATS(?);SELECT * FROM POPULAR_Droguerias;', rut, (err, result) => {
            if (err)
                throw err;
            const [[stats], popularMedicamentos, , drogueria] = result;
            const medicamentos = popularMedicamentos.map((medicamento) => {
                return {
                    nombre: medicamento.NOMBRE,
                    condicionDeVenta: medicamento.VENTA,
                    cantidad: medicamento.CANTIDAD,
                    ultimaCompra: new Date(medicamento.ULTIMA).toLocaleDateString()
                };
            });
            return res.json({
                data: Object.assign(Object.assign({}, stats), { MEDICAMENTOS: medicamentos, TOP_DROGUERIAS: drogueria }),
                ok: true
            });
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false
        });
    }
});
exports.getStats = getStats;
//# sourceMappingURL=pharmacy.js.map