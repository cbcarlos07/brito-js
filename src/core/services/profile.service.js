const ProfileRepository = require("../repositories/ProfileRepository");
const BaseService = require("./base.service");

class ProfileService extends BaseService{
    constructor(){
        super( ProfileRepository )
    }
    
    paginate(params){        
        params = {
            ...params, 
            _include: [ {association: '_user'} ]
        }
        return this.pagination(params)
    }

}

module.exports = new ProfileService