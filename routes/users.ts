import { Response,Request, Router } from 'express';
import { body, check } from 'express-validator';
import { userController } from '../controllers';

import { handlerErrorResult,aws } from '../middlewares';

const router = Router();

router.get('/:uid', (req:Request,res:Response) =>{
    console.log('users')
    return res.send('test')
})

router.post('',
            [body('email', 'Campo inválido').notEmpty().bail().isEmail().custom((email) => aws.validateObject("Users","email",{S:email})).bail(),
             body('password','Campo inválido').notEmpty().bail().isLength({min:6}),
             body('role','Campo inválido').notEmpty().isObject(),
             handlerErrorResult],
            userController.createUser)

export default router;