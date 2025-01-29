const { StatusCodes } = require("http-status-codes");
const BaseRouter = require("../base.router");
const pkg = require('../../../../package.json')

class InitRouter extends BaseRouter{
    
    init(){
        this.router.get(this.prefix, (req, res)=>{
            res.status(StatusCodes.OK)
               .json({
                description: pkg.description,
                name: pkg.name,
                version: pkg.version
               })
        })

        return this.router
    }
}

module.exports = new InitRouter()