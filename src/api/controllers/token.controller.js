const service = require('../../core/services/token.service')
const BaseController = require('./base.controller')

class TokenController extends BaseController{
     constructor(){
          super(service)
     }

     generateToken (req, res, next) {
         this.service.generateToken()
            .then(rsp => {
                 res.status(this.StatusCodes.OK).json({data: rsp, msg: this.messages.created})
            })
            .catch(err => {
                 next({...err, message: err.message, status: 500})
            })
     }
}

module.exports = new TokenController
