const repository = require("../repositories/BusRepository");
const BaseService = require("./base.service");

class BusService extends BaseService{
    constructor(){
        super( repository )
    }

    paginate(params){        
        params = {
            ...params, 
            _include: [
                {association: '_company'}
            ]
        }
        return this.pagination(params)
    }

}

module.exports = new BusService