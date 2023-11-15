
import {view} from '@app/support/helpers/path.js'

export function GetHelloWorldView(req,res,next){
    // res.sendFile(view('hello-world.html'))
    const data = req.params;
    res.send(data);
}