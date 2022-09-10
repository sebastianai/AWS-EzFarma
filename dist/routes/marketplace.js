"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.get('', [
    (0, express_validator_1.query)('page').optional({ nullable: true }).isInt({ min: 1 }),
    (0, express_validator_1.query)('q').optional({ nullable: true }).toUpperCase(),
    (0, express_validator_1.query)('field').optional({ nullable: true }).toUpperCase(),
    (0, express_validator_1.query)('order').optional({ nullable: true }).toUpperCase().isIn(['PRECIO', 'NOMBRE']),
    (0, express_validator_1.query)('sort').optional({ nullable: true }).custom((value, { req }) => middlewares_1.utils.sortCriteries(req)).bail().toUpperCase().isIn(['ASC', 'DESC']),
    middlewares_1.handlerErrorResult
], controllers_1.marketPlaceController.getProducts);
router.get('/product', [
    (0, express_validator_1.query)('id').notEmpty(),
    middlewares_1.handlerErrorResult
], controllers_1.marketPlaceController.getProductById);
router.get('/search', [
    (0, express_validator_1.query)('name', 'Campo inválido').notEmpty(),
    middlewares_1.handlerErrorResult
], controllers_1.marketPlaceController.getProductsByName);
router.get('/cart', [
    (0, express_validator_1.cookie)().exists().withMessage('Ningun token encontrado').bail().custom((value, { req }) => middlewares_1.utils.getAccessToken(value, req)).custom((token, { req }) => middlewares_1.aws.CognitoValidateUserByToken(req.token, req)).bail(),
    middlewares_1.handlerErrorResult
], controllers_1.marketPlaceController.getCart);
router.post('/cart', [
    (0, express_validator_1.cookie)().exists().withMessage('Ningun token encontrado').bail().custom((value, { req }) => middlewares_1.utils.getAccessToken(value, req)).bail().custom((token, { req }) => middlewares_1.aws.CognitoValidateUserByToken(req.token, req)).bail(),
    (0, express_validator_1.body)().notEmpty().withMessage('Productos requeridos'),
    (0, express_validator_1.body)('PRODUCTO_ID').notEmpty().withMessage('Productos requeridos').bail().custom((PRODUCTO_ID) => middlewares_1.aws.RDSValidateObject('Producto', PRODUCTO_ID)),
    middlewares_1.handlerErrorResult
], controllers_1.marketPlaceController.addToCart);
router.put('/cart', [
    (0, express_validator_1.cookie)().exists().withMessage('Ningun token encontrado').bail().custom((value, { req }) => middlewares_1.utils.getAccessToken(value, req)).bail().custom((token, { req }) => middlewares_1.aws.CognitoValidateUserByToken(req.token, req)).bail(),
    (0, express_validator_1.body)('*').notEmpty().withMessage('Productos requeridos').bail().custom((Product) => middlewares_1.aws.RDSValidateObject('Catalogo_Producto', Product.PRODUCTO_ID, 'PRODUCTO_ID', [{ key: 'ID_CATALOGO', type: '=', value: Product.ID_CATALOGO }])),
    middlewares_1.handlerErrorResult
], controllers_1.marketPlaceController.updateCart);
router.delete('/cart', [
    (0, express_validator_1.cookie)().exists().withMessage('Ningun token encontrado').bail().custom((value, { req }) => middlewares_1.utils.getAccessToken(value, req)).bail().custom((token, { req }) => middlewares_1.aws.CognitoValidateUserByToken(req.token, req)).bail(),
    (0, express_validator_1.query)('index', 'Campo inválido').notEmpty().isNumeric(),
    middlewares_1.handlerErrorResult
], controllers_1.marketPlaceController.removeFromCart);
router.get('/orders', [
    (0, express_validator_1.cookie)().exists().withMessage('Ningun token encontrado').bail().custom((value, { req }) => middlewares_1.utils.getAccessToken(value, req)).bail().custom((token, { req }) => middlewares_1.aws.CognitoValidateUserByToken(req.token, req)).bail(),
    (0, express_validator_1.query)('page').optional().isInt({ min: 1 }),
    (0, express_validator_1.query)(['start', 'end']).optional().isDate({ format: 'YYYY-MM-DD' }),
    (0, express_validator_1.query)('state').optional().isNumeric().isIn([-1, 0, 1, 2, 3]),
    (0, express_validator_1.query)('order').optional().toUpperCase().isIn(['DROGUERIA', 'FECHA', 'TOTAL']),
    (0, express_validator_1.query)('sort').optional({ nullable: true }).custom((value, { req }) => middlewares_1.utils.sortCriteries(req)).bail().toUpperCase().isIn(['ASC', 'DESC']),
    middlewares_1.handlerErrorResult
], controllers_1.marketPlaceController.getOrders);
router.get('/order/:id', [
    (0, express_validator_1.cookie)().exists().withMessage('Ningun token encontrado').bail().custom((value, { req }) => middlewares_1.utils.getAccessToken(value, req)).bail().custom((token, { req }) => middlewares_1.aws.CognitoValidateUserByToken(req.token, req)).bail(),
    (0, express_validator_1.param)('id').notEmpty().isInt(),
    middlewares_1.handlerErrorResult
], controllers_1.marketPlaceController.getOrderById);
router.get('/orders/createOrder', [
    (0, express_validator_1.cookie)().exists().withMessage('Ningun token encontrado').bail().custom((value, { req }) => middlewares_1.utils.getAccessToken(value, req)).custom((token, { req }) => middlewares_1.aws.CognitoValidateUserByToken(req.token, req)).bail(),
    middlewares_1.handlerErrorResult
], controllers_1.marketPlaceController.generateOrder);
router.get('/buys', [
    (0, express_validator_1.cookie)().exists().withMessage('Ningun token encontrado').bail().custom((value, { req }) => middlewares_1.utils.getAccessToken(value, req)).bail().custom((token, { req }) => middlewares_1.aws.CognitoValidateUserByToken(req.token, req)).bail(),
    (0, express_validator_1.query)('page').optional().isInt({ min: 1 }),
    (0, express_validator_1.query)(['start', 'end']).optional().isDate({ format: 'YYYY-MM-DD' }),
    (0, express_validator_1.query)('state').optional().isNumeric().isIn([-1, 0, 1, 2, 3]),
    (0, express_validator_1.query)('order').optional().toUpperCase().isIn(['DROGUERIA', 'FECHA', 'TOTAL']),
    (0, express_validator_1.query)('sort').optional({ nullable: true }).custom((value, { req }) => middlewares_1.utils.sortCriteries(req)).bail().toUpperCase().isIn(['ASC', 'DESC']),
    middlewares_1.handlerErrorResult
], controllers_1.marketPlaceController.getBuys);
exports.default = router;
//# sourceMappingURL=marketplace.js.map