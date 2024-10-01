const requireDir = require('require-dir');
const path = require('path')

const rotas = requireDir('./routes', {
    filter: fullPath => {
        return path.basename(fullPath) !== 'index.js';
    },
});



const API = '/api'
const VERSAO1 = '/v1'

const PREFIXv1 = `${API}`

const fnRouterConfig = deps => {
    const {app} = deps
    
    Object.values(rotas)
        .map( (r, i) => {
            const routePath = Boolean( r.router ) ? r.router.stack[0].route.path  : r.stack[0].route.path
            if( routePath == '/' ){
                const route = Boolean( r.router ) ? r.router  : r
                app.use( `/`, route )
            }
            else 
                {
                    const route = Boolean( r.router ) ? r.router  : r
                    if( route ){
                        // if( Boolean( r.realtime ) ){                            
                        //     r.realtime( io )
                        // }
                        app.use(`${PREFIXv1}`, route)
                    }else{                        
                        app.use(`${PREFIXv1}`, route)
                    }
                }
            
          })
   
}

module.exports = fnRouterConfig
