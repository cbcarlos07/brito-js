const controller = require('../../controllers/company.controller')
const BaseRouter = require("../base.router");

class CompanyRouter extends BaseRouter{
    prefix = '/company'
    constructor(controller){
        super(controller)
    }
}

module.exports = new CompanyRouter(controller)