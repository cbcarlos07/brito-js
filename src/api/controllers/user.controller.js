const UserService = require("../../core/services/user.service");
const BaseController = require("./base.controller");

class UserController extends BaseController{
    constructor(){
        super( UserService )
    }

    auth(req, res, next){
        this.service 
            .authPanel(req.body)
            .then(rsp => {
                res.status(this.StatusCodes.OK).json(rsp)
           })
           .catch(err => {
                next({...err, message: err.message, status: 500})
           })
    }
}

module.exports = new UserController