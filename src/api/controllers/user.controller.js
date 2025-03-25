const service = require("../../core/services/user.service");
const BaseController = require("./base.controller");

class UserController extends BaseController{
    constructor(){
        super( service )
    }
}

module.exports = new UserController