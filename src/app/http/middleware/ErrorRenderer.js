
import { RenderableException } from '@app/exceptions/RenderableException.js'
import { InternalServerError } from '@app/exceptions/InternalServerError.js'

export default (err, req, res, next) => {

    if (err instanceof RenderableException){
        return err.render(res);
    }

    const error =  new InternalServerError();


}