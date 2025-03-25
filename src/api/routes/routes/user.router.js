
const userController = require("../../controllers/user.controller");
const BaseRouter = require("../base.router");

class UserRouter extends BaseRouter{
    
    constructor(controller){
        super(controller)
        this.prefix = '/user'
    }
}

module.exports = new UserRouter( userController )