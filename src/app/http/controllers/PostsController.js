// import validator from '../helpers/validator.js'
// import CreateRequest from '../requests/posts/CreateRequest.js'


export function create(req, res, next){
    const data = req.body
    // const schema = CreateRequest
    // throw new Error('jenkies');
    // const data = validator.validate({schema, request})

    return res.send(data);

}

export function list(req, res, next){
    
}
export function retrieve(req, res, next){
    
}
export function update(req, res, next){
    
}

export function destroy(req, res, next){
    
}

export default {
    create, list, retrieve, update, destroy
}

