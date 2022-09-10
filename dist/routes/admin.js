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
router.post('/upload', [
    // cookie('token'),
    upload.single('Catalogo'),
    (0, express_validator_1.check)('Catalogo').custom((value, { req }) => middlewares_1.files.validateExtension('xls', 'xlsx')(req)),
    (0, express_validator_1.query)('sheet').notEmpty(),
    (0, express_validator_1.query)('venta', 'Opción inválida').optional().notEmpty().isIn(['Directa', 'Receta Médica', 'Receta Médica Retenida', 'Receta Cheque']),
    middlewares_1.handlerErrorResult
], controllers_1.adminController.updateMaster);
exports.default = router;
//# sourceMappingURL=admin.js.map