const requireDir = require('require-dir');
const path = require('path');

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
            app.use(`${PREFIXv1}`, r.init())
        })
   
}

module.exports = fnRouterConfig
