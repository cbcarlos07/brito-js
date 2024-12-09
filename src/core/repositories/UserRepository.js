const Model = require("../../models/User");
const Repository = require("./Repository");

class UserRepository extends Repository{
    constructor(){
        super(Model)
    }
}

module.exports = new UserRepository