const BaseRouter = require("../base.router");
const { StatusCodes } = require("http-status-codes")
const _package = require('../../../../package.json')
class InitRouter extends BaseRouter{
    package = _package
    init(){
        this.router.get('/', (req, res)=>{
            res.status(StatusCodes.OK).json({name: this.package.name, version: this.package.version, description: this.package.description})
        })

        return this.router
    }
}

module.exports = new InitRouter()