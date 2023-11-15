
import {Router} from 'express'
import PostsController from '@app/http/controllers/PostsController.js'


const router = Router();

router.post('/', PostsController.create);

router.get('/',(req,res,next)=>{
});

export default router

