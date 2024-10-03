const controller = require('../../controllers/uf.controller')
const BaseRouter = require('../base.router')


class BusRouter extends BaseRouter{
    prefix = '/uf'
    constructor(controller){
        super(controller)
    }
}

module.exports = new BusRouter(controller)