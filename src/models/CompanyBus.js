const Sequelize = require('sequelize');

class CompanyBus extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
				type: Sequelize.STRING,
				allowNull: false
			},
        name: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      {
        sequelize,			
        tableName: 'tb_company_bus',
        timestamps: true,
        underscored: true
      }
    );
    
    return this;
  }

  static associate(models){
    const { Bus } = models
    this.hasMany( Bus, {
      foreignKey: {
          name:  'companyBusId'
      },
      as: '_bus'
    }) 
  }

}

module.exports = CompanyBus
