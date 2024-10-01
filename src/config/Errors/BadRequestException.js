const DefaultError  = require( './interface/DefaultError');

class BadRequestException extends DefaultError {
    
    static status = 422;
    static title = "BadRequest";
    static json = true;    
}

module.exports = BadRequestException
