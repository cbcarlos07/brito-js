const Model = require("../../models/Bus");
const Repository = require("./Repository");

class BusRepository extends Repository{
    constructor(){
        super(Model)
    }
}

module.exports = new BusRepository