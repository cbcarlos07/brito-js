const controller = require('../../controllers/user.controller')
const BaseRouter = require('../base.router')

class UserRouter extends BaseRouter{
    prefix = '/user'
    constructor(){
        super(controller)
    }
}

module.exports = new UserRouter