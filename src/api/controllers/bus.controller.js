const service = require("../../core/services/bus.service");
const BaseController = require("./base.controller");

class BusController extends BaseController{
    constructor(){
        super( service )
    }
}

module.exports = new BusController