const repository = require("../repositories/UserRepository");
const BaseService = require("./base.service");

class UserService extends BaseService{
    constructor(repository){
        super( repository )
    }

}

module.exports = new UserService(repository)