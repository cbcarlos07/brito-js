const repository = require("../repositories/CompanyRepository");
const BaseService = require("./base.service");

class CompanyService extends BaseService{
    constructor(){
        super( repository )
    }

    
    paginate(params){        
        params = {
            ...params, 
            _include: [ {association: '_bus'} ]
        }
        return this.pagination(params)
    }

}

module.exports = new CompanyService