module.exports = class DefaultError extends Error{

    static status = 500;
    static title = "Internal Server Error";
    static json = false;
    
    constructor(message,alert = null,json = null){
        super(message);
        json && (this.json = json);
        this.alert = alert;
    }

    static checkInstance(obj){
        return obj.__proto__ === this.prototype;
    }

    static middleware(err,req,res,next){
        if(!this.checkInstance(err)) return next(err);
        const error = {};
        error.type = err.constructor.name;
        error.title = this.title;
        err.alert && (error.alert = err.alert);
        err.message && (error.message = err.message);
        this.json && err.json && (error.value = err.json);
        console.log('error', err.message);
        return res.status(this.status).json({error, errors: [err.message]});
    }
}