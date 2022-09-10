import { Router } from 'express';
import { body, check, cookie, param, query } from 'express-validator';
import { Product, ProductCart } from 'models/Marketplace';

import { marketPlaceController } from '../controllers';
import { handlerErrorResult, files,jwt,aws, utils } from '../middlewares';


const router = Router();

router.get('',[
    query('page').optional({nullable:true}).isInt({min:1}),
    query('q').optional({nullable:true}).toUpperCase(),
    query('field').optional({nullable:true}).toUpperCase(),
    query('order').optional({nullable:true}).toUpperCase().isIn(['PRECIO','NOMBRE']),
    query('sort').optional({nullable:true}).custom((value,{req}) => utils.sortCriteries(req)).bail().toUpperCase().isIn(['ASC','DESC']),
    handlerErrorResult
],marketPlaceController.getProducts)


router.get('/product',[
    query('id').notEmpty(),
    handlerErrorResult
],marketPlaceController.getProductById)

router.get('/search',[
    query('name','Campo inválido').notEmpty(),
    handlerErrorResult
],marketPlaceController.getProductsByName)

router.get('/cart',[
    cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
    handlerErrorResult
],marketPlaceController.getCart)

router.get('/cart/suggests',[
    cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
     handlerErrorResult
],marketPlaceController.getSuggestedProducts)

router.post('/cart',
[
    cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).bail().custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
    body().notEmpty().withMessage('Productos requeridos'),
    body('PRODUCTO_ID').notEmpty().withMessage('Productos requeridos').bail().custom((PRODUCTO_ID) => aws.RDSValidateObject('Producto',PRODUCTO_ID)),
   handlerErrorResult
],marketPlaceController.addToCart)

router.put('/cart',[
    cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).bail().custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
    body('*').notEmpty().withMessage('Productos requeridos').bail().custom((Product) => aws.RDSValidateObject('Catalogo_Producto',Product.PRODUCTO_ID,'PRODUCTO_ID',[{key:'ID_CATALOGO', type:'=',value:Product.ID_CATALOGO}])),
   handlerErrorResult
],marketPlaceController.updateCart)

router.delete('/cart',
[
    cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).bail().custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
    query('index','Campo inválido').notEmpty().isNumeric(),
    handlerErrorResult
],marketPlaceController.removeFromCart)

router.get('/orders',[
    cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).bail().custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
    query('page').optional().isInt({min:1}),
    query(['start','end']).optional().isDate({format:'YYYY-MM-DD'}),
    query('state').optional().isNumeric().isIn([-1,0,1,2,3]),
    query('order').optional().toUpperCase().isIn(['DROGUERIA','FECHA','TOTAL']),
    query('sort').optional({nullable:true}).custom((value,{req}) => utils.sortCriteries(req)).bail().toUpperCase().isIn(['ASC','DESC']),
    handlerErrorResult
],marketPlaceController.getOrders)

router.get('/order/:id',[
    cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).bail().custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
    param('id').notEmpty().isInt(),
    handlerErrorResult
],marketPlaceController.getOrderById)

router.get('/orders/createOrder',[
    cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
    handlerErrorResult
],marketPlaceController.generateOrder)

router.get('/buys',[
    cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).bail().custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
    query('page').optional().isInt({min:1}),
    query(['start','end']).optional().isDate({format:'YYYY-MM-DD'}),
    query('state').optional().isNumeric().isIn([-1,0,1,2,3]),
    query('order').optional().toUpperCase().isIn(['DROGUERIA','FECHA','TOTAL']),
    query('sort').optional({nullable:true}).custom((value,{req}) => utils.sortCriteries(req)).bail().toUpperCase().isIn(['ASC','DESC']),
    handlerErrorResult
],marketPlaceController.getBuys)

router.get('/buy/:id',[
    cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).bail().custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
    param('id','Campo obligatorio').notEmpty(),
    handlerErrorResult,
],marketPlaceController.getBuyById)

router.post('/buy/:id',[
    cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).bail().custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
    param('id','Campo obligatorio').notEmpty(),
    handlerErrorResult,
],marketPlaceController.confirmBuy)

export default router