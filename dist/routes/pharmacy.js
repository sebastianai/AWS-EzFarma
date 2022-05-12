"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const files_1 = require("../middlewares/files");
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
const router = (0, express_1.Router)();
router.get('', (req, res) => {
    const { id } = req.query;
    if (!id)
        return res.status(400).send('Farmacia no encontrada');
    return res.send(`farmacia id:${id}`);
});
router.post('/upload/:id', [
    upload.single('catalogo'),
    (0, express_validator_1.check)('catalogo').custom((value, { req }) => (0, files_1.validateExtension)('xls')(req)),
    middlewares_1.handlerErrorResult
], controllers_1.pharmacyController.uploadList);
exports.default = router;
