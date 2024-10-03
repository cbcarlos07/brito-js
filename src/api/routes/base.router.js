const router = require('express').Router()
class BaseRouter {
    
    prefix = '/'
    router = router
    constructor(_controller){
        this.controller = _controller
    } 
    
    init() {
        this.router.post(`${this.prefix}`, this.controller.create.bind( this.controller ))
        this.router.get(`${this.prefix}/:id`, this.controller.findId.bind( this.controller ))
        this.router.patch(`${this.prefix}`, this.controller.findAll.bind( this.controller ))
        this.router.patch(`${this.prefix}/paginate`, this.controller.paginate.bind( this.controller ))
        this.router.put(`${this.prefix}/:id`, this.controller.update.bind( this.controller ))
        this.router.delete(`${this.prefix}/:id`, this.controller.delete.bind( this.controller ))
        return this.router;
    }
}

module.exports = BaseRouter