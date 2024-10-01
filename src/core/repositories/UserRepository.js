const User = require("../../models/User");
const Repository = require("./Repository");

class UserRepository extends Repository{
    constructor(){
        super(User)
    }
}

module.exports = new UserRepository