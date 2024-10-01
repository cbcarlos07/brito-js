const express = require('express')
const router = express.Router()
const {StatusCodes} = require('http-status-codes')
const user = require('../controllers/user.controller')
const package = require('../../../package.json')
router.get('/', (req, res)=>{
    res.status(StatusCodes.OK).json({msg: 'Viagem eu Vou! - API', version: package.version})
})

router.get('/download/:file', (req, res)=>{
    const {file} = req.params
    const _file = path.resolve('public',file )
    res.download(_file); 
})

router.patch('/auth', user.auth.bind( user ))

module.exports = router
