const Model = require("../../models/TipoPortlet");
const Repository = require("./Repository");

class TipoPortletRepository extends Repository{
    constructor(){
        super(Model)
    }
}

module.exports = new TipoPortletRepository