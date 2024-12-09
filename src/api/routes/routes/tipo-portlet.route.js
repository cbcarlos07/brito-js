const controller = require('../../controllers/tipo-portlet.controller')
const BaseRouter = require('../base.router')


class TipoPortletRouter extends BaseRouter{
    prefix = '/tipo-portlet'
    constructor(controller){
        super(controller)
    }
}

module.exports = new TipoPortletRouter(controller)