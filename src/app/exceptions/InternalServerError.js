
import { RenderableException } from "./RenderableException.js";

export class InternalServerError extends RenderableException {

    constructor() {
        super();
        this.status = 500;
        this.body = {
            errors: ['Internal Server Error']
        };
    }

}