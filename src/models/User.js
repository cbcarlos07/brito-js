const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
					type: Sequelize.STRING,
					allowNull: false
				},
				login: {
					type: Sequelize.STRING,
					allowNull: false
				},
      },
      {
        sequelize,			
        tableName: 'tb_user',
        schema:'dbaadv',
        timestamps: true,
        underscored: true
      }
    );
    
    return this;
  }

  static associate(models){
    //const {  } = models
  }

}

module.exports = User
