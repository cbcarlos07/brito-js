const Model = require("../../models/Company");
const Repository = require("./Repository");

class CompanyRepository extends Repository{
    constructor(){
        super(Model)
    }
}

module.exports = new CompanyRepository