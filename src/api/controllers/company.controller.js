const service = require("../../core/services/company.service");
const BaseController = require("./base.controller");

class CompanyController extends BaseController{
    constructor(){
        super( service )
    }
}

module.exports = new CompanyController