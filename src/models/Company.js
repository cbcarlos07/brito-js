const Sequelize = require('sequelize');

class Company extends Sequelize.Model {
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
        tableName: 'tb_company',
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
          name:  'companyId'
      },
      as: '_bus'
    }) 
  }

}

module.exports = Company
