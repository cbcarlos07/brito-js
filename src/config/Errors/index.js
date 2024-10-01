const ValidationError = require( './ValidationError')
const UnauthorizeError = require( './UnauthorizeError')

const InternalServerError = require( './InternalServerError')

module.exports = (app) =>{

    app.use((err,res,req,next) => ValidationError.middleware(err,res,req,next));
    app.use((err,res,req,next) => UnauthorizeError.middleware(err,res,req,next));
   
    app.use((err,res,req,next) => InternalServerError.middleware(err,res,req,next));
}
