import {env} from './kernel.js'

export default {
    name: env.APP_NAME,
    port: env.SERVER_PORT,
}