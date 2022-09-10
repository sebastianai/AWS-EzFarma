"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const multer_1 = __importDefault(require("multer"));
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage, limits: { fieldSize: 10 * 1024 * 1024 } });
const router = (0, express_1.Router)();
router.get('', [
    (0, express_validator_1.cookie)().exists().withMessage('Ningun token encontrado').bail().custom((value, { req }) => middlewares_1.utils.getAccessToken(value, req)).bail().custom((token, { req }) => middlewares_1.aws.CognitoValidateUserByToken(req.token)),
    middlewares_1.handlerErrorResult
], controllers_1.pharmacyController.getLists);
router.post('/upload', [
    (0, express_validator_1.cookie)().exists().withMessage('Ningun token encontrado').bail().custom((value, { req }) => middlewares_1.utils.getAccessToken(value, req)).bail().custom((token, { req }) => middlewares_1.aws.CognitoValidateUserByToken(req.token, req)).bail(),
    upload.array('Catalogo'),
    (0, express_validator_1.check)('Catalogo').custom((value, { req }) => middlewares_1.files.validateExtension('xls', 'xlsx')(req)).bail(),
    (0, express_validator_1.body)('Drogueria', 'Campo inválido').notEmpty(),
    (0, express_validator_1.body)('Pagina', 'Campo inválido').notEmpty(),
    (0, express_validator_1.body)('Valido_desde', 'Campo inválido').notEmpty(),
    (0, express_validator_1.body)('Valido_hasta', 'Campo inválido').notEmpty(),
    middlewares_1.handlerErrorResult
], controllers_1.pharmacyController.uploadList);
router.get('/stats', [
    (0, express_validator_1.cookie)().exists().withMessage('Ningun token encontrado').bail().custom((value, { req }) => middlewares_1.utils.getAccessToken(value, req)).bail().custom((token, { req }) => middlewares_1.aws.CognitoValidateUserByToken(req.token, req)),
    middlewares_1.handlerErrorResult
], controllers_1.pharmacyController.getStats);
exports.default = router;
//# sourceMappingURL=pharmacy.js.map