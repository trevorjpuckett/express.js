import {Router} from 'express'
import { GetHelloWorldView } from '../controllers/HelloWorldController.js';
import TrimStrings from '../middleware/TrimStrings.js';

const router = Router();

router.get('/',TrimStrings,GetHelloWorldView);

export default router

