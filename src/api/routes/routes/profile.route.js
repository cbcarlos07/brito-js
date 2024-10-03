const controller = require('../../controllers/profile.controller')
const BaseRouter = require('../base.router')


class ProfileRouter extends BaseRouter{
    prefix = '/profile'
    constructor(){
        super(controller)
    }
}

module.exports = new ProfileRouter