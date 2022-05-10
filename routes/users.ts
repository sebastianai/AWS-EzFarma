import { Response,Request, Router } from 'express';

const router = Router();

router.get('/:uid', (req:Request,res:Response) =>{
    console.log('users')
    return res.send('test')
})

export default router;