const Profile = require("../../models/Profile");
const Repository = require("./Repository");

class ProfileRepository extends Repository{
    constructor(){
        super(Profile)
    }
}

module.exports = new ProfileRepository