const Sequelize = require('sequelize');

class Bus extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        numberOfSeats: {
					type: Sequelize.INTEGER,
					allowNull: false
				},
        description: {
					type: Sequelize.TEXT,
					allowNull: false
				},
        companyBusId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'tb_company_bus',
						key: 'id'
					},
					onDelete: 'restrict',
					onUpdate: 'cascade'
				},
        companyId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'tb_company',
						key: 'id'
					},
					onDelete: 'RESTRICT',
					onUpdate: 'cascade'
				},
      },
      {
        sequelize,			
        tableName: 'tb_bus',
        timestamps: true,
        underscored: true
      }
    );
    
    return this;
  }

  static associate(models){
    const { Company, CompanyBus } = models

    this.belongsTo( CompanyBus, {
        foreignKey: {
            name:  'companyBusId'
        },
        as: '_companyBus'
    }) 
    this.belongsTo( Company, {
        foreignKey: {
            name:  'companyId'
        },
        as: '_company'
    }) 
  }

}

module.exports = Bus
