const { calculateTotalPages } = require("../utils/utils")

class BaseService {
    constructor(_rep){
        this.repository = _rep
    }

    create(data){
        return this.repository.create(data)
    }

    update(id, data){
        return this.repository.update(id, data)
    }

    delete(id){
        return this.repository.delete( id )
    }

    findById(id){
        return this.repository.findById(id)
    }

    findAll(params){
        return this.repository.findAll(params)
    }
    
    findOne(data){
        return this.repository.findOne(data)
    }

    getTotal(params = null){
        return this.repository.getTotal(params)
    }

    pagination(params, paramsTotal = null){
        return new Promise(async(resolve, reject)=>{
            try {
                const total = await this.getTotal(paramsTotal)
                const result = await this.repository.paginate(params)
                const {page, limit} = params
                resolve({
                    page,
                    total,
                    totalPage: calculateTotalPages(total, limit),
                    rows: result.rows
                })
                
            } catch (error) {
                reject(error)
            }
        })
    }

    paginate(params){
        return this.pagination(params)
    }
}

module.exports = BaseService