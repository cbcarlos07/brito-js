const service = require("../../core/services/uf.service");
const BaseController = require("./base.controller");

class UFController extends BaseController{
    constructor(){
        super( service )
    }
}

module.exports = new UFController