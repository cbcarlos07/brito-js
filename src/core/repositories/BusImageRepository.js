const Model = require("../../models/BusImage");
const Repository = require("./Repository");

class BusImageRepository extends Repository{
    constructor(){
        super(Model)
    }
}

module.exports = new BusImageRepository