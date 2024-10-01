const ProfileService = require("../../core/services/profile.service");
const BaseController = require("./base.controller");

class ProfileController extends BaseController{
    constructor(){
        super( ProfileService )
    }
}

module.exports = new ProfileController