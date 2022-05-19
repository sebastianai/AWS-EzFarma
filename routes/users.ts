import { Response,Request, Router } from 'express';
import { body, check, cookie, header } from 'express-validator';
import { userController } from '../controllers';

import { handlerErrorResult,aws,jwt } from '../middlewares';

const router = Router();

router.get('',[
    // cookie('token').custom(jwt.verifyToken),
    check('token').custom(jwt.verifyToken),
    handlerErrorResult]
    , userController.getUser)

router.post('',
            [body('email', 'Campo inválido').notEmpty().bail().isEmail().custom((email) => aws.validateObject("Users","email",{S:email})).bail(),
             body('password','Campo inválido').notEmpty().bail().isLength({min:6}),
             body('role','Campo inválido').notEmpty().isObject(),
             handlerErrorResult],
            userController.createUser)

router.post('/login',
            [body('email', 'Campo inválido').notEmpty().bail().isEmail().custom((email) => aws.validateObject("Users","email",{S:email},true)).bail(),
             body('password','Campo inválido').notEmpty().bail().isLength({min:6}),
             handlerErrorResult],
            userController.login)

router.get('/logout',userController.logout);

router.get('/renew',
            [
                // cookie('token').custom(jwt.verifyToken),
                check('token').custom(jwt.verifyToken),
                handlerErrorResult
            ],
            userController.renewToken)

export default router;