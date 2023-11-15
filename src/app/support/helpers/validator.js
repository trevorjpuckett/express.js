import Validator from 'validatorjs'
import { UnprocessableEntity } from '@app/exceptions/UnprocessableEntity';


export function Validate({data, rules, messages}){

    const validator = new Validator(data,rules);

    if(validator.fails()){
        const errors = validator.errors;
        throw new UnprocessableEntity({data, errors});
    }

    return data;

}