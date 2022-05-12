"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.get('/:uid', (req, res) => {
    console.log('users');
    return res.send('test');
});
router.post('', [(0, express_validator_1.body)('email', 'Campo inválido').notEmpty().bail().isEmail().custom((email) => middlewares_1.aws.validateObject("Users", "email", { S: email })).bail(),
    (0, express_validator_1.body)('password', 'Campo inválido').notEmpty().bail().isLength({ min: 6 }),
    (0, express_validator_1.body)('role', 'Campo inválido').notEmpty().isObject(),
    middlewares_1.handlerErrorResult], controllers_1.userController.createUser);
exports.default = router;
