const axios = require('axios')
module.exports = {
      /**
         * 
         * @param {*} base64String 
         * @param {*} ext 
         * @param {*} local 
         * @returns 
         */
      b64ToFile(base64String, ext, local = IMAGE){
        return new Promise((resolve, reject)=>{
            const nomeArquivo = `${new Date().getTime()}.${ext}`
            const buffer = Buffer.from(base64String, 'base64');
          
            const file = path.resolve( PUBLIC, local, nomeArquivo)
            
            fs.writeFile( file , buffer, (err) => {
              if (err) {
                reject({error: 'Erro ao criar o arquivo', err, status: false})
                
              } else {
                resolve(nomeArquivo)
              }

        })
      });
    },

    getExtension(nomeArquivo){
        const pontoIndex = nomeArquivo.lastIndexOf('.');
        return pontoIndex !== -1 ? nomeArquivo.substring(pontoIndex + 1) : '';
    },

    calculateTotalPages: (totalItems, itemsPerPage) =>{
      return Math.ceil(totalItems / itemsPerPage);
    },

    saveInfo: async (data, callback) => {
    
        const image = await module.exports.b64ToFile(data.b64, module.exports.getExtension( data.originalName ))

        const values = {
            ...data,
            image
        }
        
        callback(values)
        
    },
    validarGoogleReCaptcha: recaptcha => {
  
        const dados = {
            response: recaptcha,
            secret: process.env.RECAPCTHA_KEY,
          };
        
          return axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            null,
            { params: dados }
          );
    }
}