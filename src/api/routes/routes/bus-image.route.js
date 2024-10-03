const controller = require('../../controllers/bus-image.controller')
const BaseRouter = require('../base.router')
class BusImageRouter extends BaseRouter{
    prefix = '/bus-image'
    constructor(controller){
        super(controller)
    }

}

module.exports = new BusImageRouter(controller)