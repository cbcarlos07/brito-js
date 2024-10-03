const service = require("../../core/services/bus-image.service");
const BaseController = require("./base.controller");

class BusImageController extends BaseController{
    constructor(){
        super( service )
    }

    create(req, res, next){
        this.service
            .createWithImage(req.body)
            .then(rsp => {
                res.status(this.StatusCodes.CREATED).json(rsp)
            })
            .catch(err => {
                next({...err, status: 500, message: err.message})
            })
    }

    delete(req, res, next){
        const { id } = req.params
        this.service
            .deleteImage( id )
            .then(rsp => {
                res.status(this.StatusCodes.OK).json(rsp)
            })
            .catch(err => {
                next({...err, status: 500, message: err.message})
            })
    }
}

module.exports = new BusImageController