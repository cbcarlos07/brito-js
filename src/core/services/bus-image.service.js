const repository = require("../repositories/BusImageRepository");
const { b64ToFile, removeFile } = require("../utils/utils");
const BaseService = require("./base.service");

class BusImageService extends BaseService{
    constructor(){
        super( repository )
    }

    createWithImage(data){
        return new Promise((resolve, reject)=>{
            b64ToFile(data.b64, (image, err) => {
                if(err){
                    reject(err)
                }
                const obj = {busId: data.id, image }
                resolve( this.create( obj ) )
            })

        })
    }

    deleteImage(id){
        return new Promise(async (resolve, reject)=>{
            
            
            const obj = await this.findById( id )
            removeFile(obj.image, (status, err)=>{
                if(err){
                    reject(err)
                }
                resolve(status)
            })
            
            resolve( this.delete( id ) )
                
            
        })
    }

}

module.exports = new BusImageService