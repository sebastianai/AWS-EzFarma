import { Response,Request, Router } from 'express';
import { body, check, cookie, header,param } from 'express-validator';
import { userController } from '../controllers';

import { aws, handlerErrorResult } from '../middlewares';

const router = Router();

router.get('/:id_token'
    // cookie('token').custom(jwt.verifyToken),
    , userController.login)

router.post('/create_user/:type',
            [
             param('type').notEmpty().custom((pool) => aws.validateCognitoPools(pool)).bail(),
             body('email', 'Campo inválido').notEmpty().custom((email,{req}) => aws.validateUserByField("email",email)(req)).bail(),
             body('role','Campo inválido').notEmpty().isObject().custom(({rut},{req}) => aws.validateUserByField('custom:RUT',rut)(req)),
             handlerErrorResult],
            userController.createUser)

router.post('/login',[header('Authorization').custom((token) =>aws.validateCognitoUserByToken(token)),
handlerErrorResult],
            userController.login)

// router.get('/logout',userController.logout);

// router.get('/renew',
//             [
//                 // cookie('token').custom(jwt.verifyToken),
//                 check('token').custom(jwt.verifyToken),
//                 handlerErrorResult
//             ],
//             userController.renewToken)

export default router;