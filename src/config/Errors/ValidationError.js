const DefaultError = require( './interface/DefaultError' )
module.exports = class ValidationError extends DefaultError {
    static status = 422;
    static title = "Validation Error";
    static json = true;    
}
