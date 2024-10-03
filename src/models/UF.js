const Sequelize = require('sequelize');

class UF extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        acronym: {
					type: Sequelize.STRING,
					allowNull: false
				},
      },
      {
        sequelize,			
        tableName: 'tb_uf',
        timestamps: false,
        underscored: true
      }
    );
    
    return this;
  }

}

module.exports = UF
