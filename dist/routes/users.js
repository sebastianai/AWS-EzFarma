"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.get('', [
    // cookie('token').custom(jwt.verifyToken),
    (0, express_validator_1.check)('token').custom(middlewares_1.jwt.verifyToken),
    middlewares_1.handlerErrorResult
], controllers_1.userController.getUser);
router.post('', [(0, express_validator_1.body)('email', 'Campo inválido').notEmpty().bail().isEmail().custom((email) => middlewares_1.aws.validateObject("Users", "email", { S: email })).bail(),
    (0, express_validator_1.body)('password', 'Campo inválido').notEmpty().bail().isLength({ min: 6 }),
    (0, express_validator_1.body)('role', 'Campo inválido').notEmpty().isObject(),
    middlewares_1.handlerErrorResult], controllers_1.userController.createUser);
router.post('/login', [(0, express_validator_1.body)('email', 'Campo inválido').notEmpty().bail().isEmail().custom((email) => middlewares_1.aws.validateObject("Users", "email", { S: email }, true)).bail(),
    (0, express_validator_1.body)('password', 'Campo inválido').notEmpty().bail().isLength({ min: 6 }),
    middlewares_1.handlerErrorResult], controllers_1.userController.login);
router.get('/logout', controllers_1.userController.logout);
router.get('/renew', [
    // cookie('token').custom(jwt.verifyToken),
    (0, express_validator_1.check)('token').custom(middlewares_1.jwt.verifyToken),
    middlewares_1.handlerErrorResult
], controllers_1.userController.renewToken);
exports.default = router;
//# sourceMappingURL=users.js.map