const ProfileRepository = require("../repositories/ProfileRepository");
const BaseService = require("./base.service");

class ProfileService extends BaseService{
    constructor(){
        super( ProfileRepository )
    }

}

module.exports = new ProfileService