"use strict";
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
exports.updateMaster = void 0;
const lib_storage_1 = require("@aws-sdk/lib-storage");
const AWS_1 = __importDefault(require("../AWS"));
const helpers_1 = require("../helpers");
const cognito = AWS_1.default.Cognito;
const updateMaster = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sheet, category, venta } = req.query;
        const file = (req.files || [req.file]);
        //Verificar usuario admin
        // const token = req.headers.authorization?.split(' ')[1];
        // let params: GetUserCommandInput | AdminGetUserCommandInput = {
        //     AccessToken: token
        // }
        // const user = await cognito.send( new GetUserCommand(params))
        // params = {
        //     Username:user.Username,
        //     UserPoolId:process.env.ADMIN_USER_POOL_ID
        // }
        // const isAdmin  = await cognito.send( new AdminGetUserCommand(params))
        // if(!isAdmin) return res.status(403).end()
        file.forEach((file) => __awaiter(void 0, void 0, void 0, function* () {
            const csv = helpers_1.files.transformExcelToCsv(file.buffer, sheet, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        msg: err,
                        ok: false
                    });
                }
            }, venta, category);
            const params = {
                Bucket: 'ezf-master',
                Key: 'master.csv',
                Body: csv
            };
            const parallelUpload = new lib_storage_1.Upload({
                client: AWS_1.default.S3,
                params,
                partSize: 1024 * 1024 * 5,
                leavePartsOnError: false
            });
            const data = yield parallelUpload.done();
            return res.json({
                data,
                ok: true
            });
        }));
    }
    catch (error) {
        return res.status(403).json({
            msg: error,
            ok: false
        });
    }
});
exports.updateMaster = updateMaster;
//# sourceMappingURL=admin.js.map