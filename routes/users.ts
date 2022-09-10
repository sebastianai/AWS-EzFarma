import { Response,Request, Router } from 'express';
import { body, check, cookie, header,param, query } from 'express-validator';
import { userController } from '../controllers';

import { aws, handlerErrorResult, utils } from '../middlewares';

const router = Router();

router.get('',
            [
             cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).bail().custom((value,{req}) =>aws.CognitoValidateUserByToken(req.token)),
             handlerErrorResult],
             userController.getUserInfo)


router.post('/create_user/:type',
            [
             param('type').notEmpty().custom((pool) => aws.CognitoValidatePools(pool)).bail(),
             body('email', 'Campo inválido').notEmpty().custom((email,{req}) => aws.CognitoValidateUserByField("email",email)(req)).bail(),
             body('info','Campo inválido').notEmpty().isObject().custom(({rut},{req}) => aws.CognitoValidateUserByField('custom:RUT',rut)(req)),
             body('address','Campo inválido').notEmpty(),
             handlerErrorResult],
            userController.createUser)

export default router;