"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.get('', [
    (0, express_validator_1.cookie)().exists().withMessage('Ningun token encontrado').bail().custom((value, { req }) => middlewares_1.utils.getAccessToken(value, req)).bail().custom((value, { req }) => middlewares_1.aws.CognitoValidateUserByToken(req.token)),
    middlewares_1.handlerErrorResult
], controllers_1.userController.getUserInfo);
router.post('/create_user/:type', [
    (0, express_validator_1.param)('type').notEmpty().custom((pool) => middlewares_1.aws.CognitoValidatePools(pool)).bail(),
    (0, express_validator_1.body)('email', 'Campo inválido').notEmpty().custom((email, { req }) => middlewares_1.aws.CognitoValidateUserByField("email", email)(req)).bail(),
    (0, express_validator_1.body)('info', 'Campo inválido').notEmpty().isObject().custom(({ rut }, { req }) => middlewares_1.aws.CognitoValidateUserByField('custom:RUT', rut)(req)),
    (0, express_validator_1.body)('address', 'Campo inválido').notEmpty(),
    middlewares_1.handlerErrorResult
], controllers_1.userController.createUser);
exports.default = router;
//# sourceMappingURL=users.js.map