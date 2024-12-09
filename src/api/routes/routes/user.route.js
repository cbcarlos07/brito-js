const controller = require('../../controllers/user.controller')
const BaseRouter = require('../base.router')


class UserRouter extends BaseRouter{
    prefix = '/user'
    constructor(controller){
        super(controller)
    }
}

module.exports = new UserRouter(controller)