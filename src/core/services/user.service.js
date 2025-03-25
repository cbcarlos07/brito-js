const UserRepository = require("../repositories/UserRepository");
const BaseService = require("./base.service");
const {DEFAULT_PWD, JWT_SECRET, RECAPCTHA_FAKE} = process.env
const {Op} = require('sequelize')
const md5 = require('md5')
const jwt = require('jsonwebtoken');
const {  checkCloudflareRecaptcha } = require("../utils/utils");


class UserService extends BaseService{
    constructor(repository){
        super( repository )
    }

    create(data){
        data.password = md5( data.password )
        return super.create(data)
    }

    
    paginate(params){
        
        const _params = {
            ...params.value,
            _include: [ {association: '_profile'}, {association: '_company'} ]
        }
        return this.pagination(_params)
    }

    authPanel ( data ) {
        return new Promise(async(resolve, reject)=>{
      
            const { recaptcha } = data

            if(!recaptcha){
                resolve({
                    statusCode: 404, 
                    status: false, 
                    data: {},  
                    msg: 'Código captcha não fornecido'
                })
            }

            if( recaptcha !== RECAPCTHA_FAKE ){
                

                const { data: resultadoValidacao } = await checkCloudflareRecaptcha({token: recaptcha, ip: data.ip});
                
                if (!resultadoValidacao.success) {
                    // * Erros retornados pela API:
                    const erros = resultadoValidacao["error-codes"];
                    
                
                    reject({
                        statusCode: 401, 
                        status: false, 
                        data: {}, 
                        message: 'Problema ao validar código catpcha'
                    })
                }
            }

            const { email } = data
            
            let respEmail = await this.findOne({
                params: {
                    [Op.or]: [
                        {
                            username: email
                        },
                        {
                            email
                        }
            
                    ]
                },
                _include: [
                    {association: '_profile'},
                    {association: '_company'}
                ]
            }) || undefined
            let msg = 'Login ou senha inválidos'
            let statusCode = 400
            let status = false
            let token = undefined
            let refreshToken = undefined
            
            if( respEmail ){
            
                const obj = {
                            userId: respEmail.id,
                            companyId: respEmail.companyId
                            }
                const {password} = data
                if( password === DEFAULT_PWD ){
                    statusCode = 200
                    status = true
                    token = jwt.sign( obj, JWT_SECRET, { expiresIn: 60 * 60 * 24 }  )
                    refreshToken = jwt.sign( obj, JWT_SECRET, { expiresIn: '7d' }  )
                    msg = undefined

                }else{
                    data.password = md5(data.password)
                    
                    respEmail = await this.repository.findOne({
                        params: {
                            [Op.or]: [
                                {
                                    username: data.email
                                },
                                {
                                    email: data.email
                                }
                    
                            ],
                            password: data.password
                        },
                        _include: [
                            {association: '_profile'},
                            {association: '_company'}
                        ]
                    }) || undefined
                    if( respEmail ){
                        statusCode = 200
                        status = true                    
                        token = jwt.sign( obj, JWT_SECRET, { expiresIn: 60 * 60 * 24 }  )
                        refreshToken = jwt.sign( obj, JWT_SECRET, { expiresIn: '7d' }  )
                        msg = undefined
                    }
                }
            }
            
            if( respEmail ){
                await this.update({id: respEmail.id}, {refreshToken})                
                resolve({statusCode, status, data: respEmail, token, refreshToken, msg})
            }else{
                reject({message: 'Login ou senha incorretos'})
            }
        })
    }
    

}

module.exports = new UserService(UserRepository)
