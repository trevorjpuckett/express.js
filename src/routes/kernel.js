import PostsRoutes from './posts.js'
import ParseBodyAsJson from '../middleware/ParseBodyAsJson.js';


/**
 * 
 * Register all routes and routers here.
 * Registering routes should be formatted like this:
 * app.use('/<subdomain>',...<route-specific-middleware>, <router>/<callback>)
 */
export function bootstrap(app){

    app.use('/posts', ParseBodyAsJson, PostsRoutes);

}


export default {
    bootstrap
}