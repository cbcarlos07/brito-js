const service = require("../../core/services/user.service");
const BaseController = require("./base.controller");

class UserController extends BaseController{
    constructor(_service){
        super( _service )
    }
}

module.exports = new UserController(service)