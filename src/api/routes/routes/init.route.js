const express = require('express')
const router = express.Router()
const {StatusCodes} = require('http-status-codes')
const user = require('../../controllers/user.controller')

const _package = require('../../../../package.json')
const tokenController = require('../../controllers/token.controller')

class InitRoute {
    prefix = '/'
    router = router
    package = _package
    
    init(){
        this.router.get('/', (req, res)=>{
            res.status(StatusCodes.OK).json({msg: 'Viagem eu Vou! - API', version: this.package.version})
        })
        
        this.router.get('/download/:file', (req, res)=>{
            const {file} = req.params
            const _file = path.resolve('public',file )
            res.download(_file); 
        })
        
        this.router.patch('/auth-panel', user.auth.bind( user ))
        
        this.router.get('/token', tokenController.generateToken.bind( tokenController ))

        return this.router;
    }
}

module.exports = new InitRoute
