
import dotenv from 'dotenv'
import { app_path } from '../helpers/path.js';

export const env = dotenv.config({path:app_path('.env')})?.parsed;

export default env;