const Sequelize = require('sequelize');

class Company extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        logo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cnpj: {
          type: Sequelize.STRING,
          allowNull: true
        },
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
    const { Bus, User } = models
    this.hasMany( Bus, {
      foreignKey: {
          name:  'companyId'
      },
      as: '_bus'
    }) 

    
      
    this.hasMany( User, {
      foreignKey: {
          name:  'companyId'
      },
      as: '_user'
    }) 
    
  }

}

module.exports = Company
