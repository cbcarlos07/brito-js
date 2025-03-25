const { StatusCodes } = require("http-status-codes")
const messages = require("./messages")

class BaseController {

    constructor(_service){
        this.service = _service
        this.messages = messages
        this.StatusCodes = StatusCodes
    }

     create(req, res, next){
          this.service
               .create(req.body)
               .then(rsp => {
                    res.status(this.StatusCodes.OK).json({data: rsp, msg: this.messages.created})
               })
               .catch(err => {
                    next({...err, status: 500, message: err.message})
               })
    }

    update(req, res, next){
        const {id} = req.params
        this.service.update(id, req.body)
           .then(() => {
                res.status(this.StatusCodes.OK).json({msg: this.messages.updated})
           })
           .catch(err => {
                next({...err, message: err.message, status: 500})
           })
    }

    findId(req, res, next){
        const {id} = req.params
        this.service.findById(id)
           .then(rsp => {
                res.status(this.StatusCodes.OK).json(rsp)
           })
           .catch(err => {
                next({...err, status: 500})
           })
    }

    findAll(req, res, next){
        this.service.findAll(req.body)
               .then(rsp => {
                    res.status(this.StatusCodes.OK).json(rsp)
               })
               .catch(err => {
                    next({...err, message: err.message, status: 500})
               })
    }

    find(req, res, next) {
        this.service.findOne(req.body)
             .then(rsp => {
                  res.status(this.StatusCodes.OK).json(rsp)
             })
             .catch(err => {
                  next({...err, message: err.message, status: 500})
             })
   }

    delete(req, res, next){
        const {id} = req.params
        this.service.delete(id)
           .then(() => {
                res.status(this.StatusCodes.OK).json({msg: this.messages.removed})
           })
           .catch(err => {
                next({...err, status: 500})
           })
    }

    // custom(req, res, next){        
    //     const {id} = req.body
    //     this.service.customReq(id)
    //            .then(rsp => {
    //                 res.status(this.StatusCodes.OK).json(rsp)
    //            })
    //            .catch(err => {
    //                 next({...err, message: err.message, status: 500})
    //            })
    // }

     paginate(req, res, next){
          
          this.service.paginate(req.body)
            .then(rsp => {
                res.status(this.StatusCodes.OK).json(rsp)
            })
            .catch(err => {
                next({...err, message: err.message, status: 500})
            })
    }
}

module.exports = BaseController