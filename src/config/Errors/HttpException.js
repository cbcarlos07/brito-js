class HttpException extends Error {
    response;
    status = 500;
   
    constructor(response, status){
        this.response = response
        this.status = status
    }
    
    static createBody(response, description = '', statusCode = this.status){}
}

module.exports = HttpException

