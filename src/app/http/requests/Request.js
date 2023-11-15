import { Validate } from "../helpers/validator.js";

export class Request {

    constructor(req){
        this.root = req;
        this.method = req.method;
        this.body = req.body;
        this.params = req.params;
        this.contentType = req.contentType
    }

    data(){
        if(this._data){ return this._data; }
        if(this.method == 'POST'){
            return this._data = this.body;
        }
        return this._data = this.params;
    }

    rules(){
        return {

        }
    }

    validate(rules){
        const data = this.data();
        return Validate({data,rules});
    }

}