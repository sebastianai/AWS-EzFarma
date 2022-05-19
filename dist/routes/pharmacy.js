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
    (0, express_validator_1.cookie)('token').custom(middlewares_1.jwt.verifyToken),
    (0, express_validator_1.param)("catalogo").notEmpty().bail().custom((value) => middlewares_1.aws.validateObject("Farmacias", "Nombre", { S: "Farmacia de prueba" }, value)),
    middlewares_1.handlerErrorResult
], controllers_1.pharmacyController.getLists);
router.post('/upload', [
    upload.array('Catalogo'),
    (0, express_validator_1.check)('Catalogo').custom((value, { req }) => middlewares_1.files.validateExtension('xls', 'xlsx')(req)),
    middlewares_1.handlerErrorResult
], controllers_1.pharmacyController.uploadList);
exports.default = router;
//# sourceMappingURL=pharmacy.js.map