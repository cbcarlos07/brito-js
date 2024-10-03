const controller = require('../../controllers/bus.controller')
const BaseRouter = require('../base.router')


class BusRouter extends BaseRouter{
    prefix = '/bus'
    constructor(controller){
        super(controller)
    }
}

module.exports = new BusRouter(controller)