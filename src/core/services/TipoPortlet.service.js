const repository = require("../repositories/TipoPortletRepository");
const BaseService = require("./base.service");

class TipoPortletService extends BaseService{
    constructor(repository){
        super( repository )
    }

}

module.exports = new TipoPortletService(repository)