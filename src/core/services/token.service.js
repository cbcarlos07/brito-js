const JWT_SECRET = process.env.JWT_SECRET
const jwt = require('jsonwebtoken')
module.exports = {
    generateToken: () => {
        return new Promise((resolve, reject)=>{
            const token = jwt.sign( {name: 'Token infinito'}, JWT_SECRET )

            resolve(token)
        })
       
    }
}