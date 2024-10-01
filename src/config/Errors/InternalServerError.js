const DefaultError = require( './interface/DefaultError');
const Debug = require( "debug");
const log = Debug('InternalServerError')

module.exports = class InternalServerError extends DefaultError{

    static status = 500;
    static title = "Internal Server Error";
    static json = false;
    
    constructor(message,json){
        super(message);
        json && (this.json = json);
    }

    static checkInstance(obj){
        return obj.__proto__ === this.prototype;
    }

    static middleware(err,req,res,next){
        log(err);
        console.log('internal',err);
        return res.status(this.status).json({error:{
            type:'InternalServerError',
            title:this.title,
            error: err.message
        }});
    }
}
