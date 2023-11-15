// // import Ajv from 'ajv'
// import { UnprocessableEntity } from '../exceptions/UnprocessableEntity.js';

// // const Validator = new Ajv();

// export function Validate ({schema, request}){
//     const data = request.body

//     const valid = Validator.validate(schema, data);

//     if (!valid){
//         const errors = Validator.errors;
//         throw new UnprocessableEntity({data, errors})
//     }  

//     return data;
// }

// export default {
//     validate: Validate,
// }