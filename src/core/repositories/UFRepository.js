const Model = require("../../models/UF");
const Repository = require("./Repository");

class UFRepository extends Repository{
    constructor(){
        super(Model)
    }
}

module.exports = new UFRepository