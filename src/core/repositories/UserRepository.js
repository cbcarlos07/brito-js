const Model = require("../../models/User");
const Repository = require("./Repository");

class UserRepository extends Repository{
    constructor(model){
        super(model)
    }
}

module.exports = new UserRepository(Model)