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
        companyId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'tb_company',
						key: 'id'
					},
					onDelete: 'cascade',
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
    const { Company } = models

    this.belongsTo( Company, {
        foreignKey: {
            name:  'companyId'
        },
        as: '_company'
    }) 
  }

}

module.exports = Bus
