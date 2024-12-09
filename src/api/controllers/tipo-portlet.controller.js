const service = require("../../core/services/TipoPortlet.service");
const BaseController = require("./base.controller");

class TipoPortletController extends BaseController{
    constructor(){
        super( service )
    }
}

module.exports = new TipoPortletController