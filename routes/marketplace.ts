import { Router } from 'express';
import { body, check, cookie, query } from 'express-validator';
import { Product, ProductCart } from 'models/Marketplace';

import { marketPlaceController } from '../controllers';
import { handlerErrorResult, files,jwt,aws, utils } from '../middlewares';


const router = Router();

router.get('',marketPlaceController.getProducts)

router.get('/product',[
    query('id').notEmpty(),
    handlerErrorResult
],marketPlaceController.getProductById)

router.get('/search',[
    query('name','Campo inválido').notEmpty(),
    handlerErrorResult
],marketPlaceController.getProductsByName)

router.get('/cart',[
    cookie('CognitoIdentityServiceProvider.*.accessToken').notEmpty().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
     handlerErrorResult
],
marketPlaceController.getCart)

router.post('/cart',
[
    cookie('CognitoIdentityServiceProvider.*.accessToken').notEmpty().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
    body().notEmpty().withMessage('Productos requeridos'),
    body('PRODUCTO_ID').notEmpty().withMessage('Productos requeridos').bail().custom((PRODUCTO_ID) => aws.RDSValidateObject('Producto',PRODUCTO_ID)),
   handlerErrorResult
],marketPlaceController.addToCart)

router.put('/cart',[
    cookie('CognitoIdentityServiceProvider.*.accessToken').notEmpty().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
    body('*').notEmpty().withMessage('Productos requeridos').bail().custom((Product) => aws.RDSValidateObject('Catalogo_Producto',Product.PRODUCTO_ID,'PRODUCTO_ID',[{key:'ID_CATALOGO', type:'=',value:Product.ID_CATALOGO}])),
   handlerErrorResult
],marketPlaceController.updateCart)

router.delete('/cart',
[
    cookie('CognitoIdentityServiceProvider.*.accessToken').notEmpty().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
    query('index','Campo inválido').notEmpty().isNumeric(),
    handlerErrorResult
],marketPlaceController.removeFromCart)

router.get('/orders/createOrder',
    marketPlaceController.generateOrder)

export default router