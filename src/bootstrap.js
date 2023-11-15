import Middleware from '@app/middleware/kernel.js'
import Routes from '@routes/kernel.js'


export function bootstrap(app){
    // first bootstrap global middleware
    Middleware.bootstrap.global(app);
    // third bootstrap routes
    Routes.bootstrap(app);
    // lastly bootstrap end of life cycle middleware
    Middleware.bootstrap.eol(app);
}

export default bootstrap