const repository = require("../repositories/UFRepository");
const BaseService = require("./base.service");

class UFService extends BaseService{
    constructor(){
        super( repository )
    }
}

module.exports = new UFService