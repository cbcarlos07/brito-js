const Sequelize = require('sequelize');

class Place extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
					type: Sequelize.STRING,
					allowNull: false
				},
				address: {
          type: Sequelize.STRING,
					allowNull: false
        },
        description: {
          type: Sequelize.TEXT,
					allowNull: true
        },
        ufId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'tb_uf',
						key: 'id'
					},
					onDelete: 'RESTRICT',
					onUpdate: 'cascade'
				},
			
      },
      {
        sequelize,			
        tableName: 'tb_place',
        timestamps: true,
        underscored: true
      }
    );
    
    return this;
  }

  static associate(models){
    const { UF } = models
    
    this.belongsTo( UF, {
        foreignKey: {
            name:  'ufId'
        },
        as: '_uf'
    }) 
  }

}

module.exports = Place
