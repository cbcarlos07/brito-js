const Sequelize = require('sequelize');

class BusImage extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        busId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_bus',
                key: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
      },
      {
        sequelize,			
        tableName: 'tb_bus_image',
        timestamps: true,
        underscored: true
      }
    );
    
    return this;
  }

  static associate(models){
    const { Bus } = models

    this.belongsTo( Bus, {
        foreignKey: {
            name:  'busId'
        },
        as: '_bus'
    }) 
  }

}

module.exports = BusImage
