const Sequelize = require('sequelize');

class Profile extends Sequelize.Model {
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
        tableName: 'tb_profile',
        timestamps: true,
        underscored: true
      }
    );
    
    return this;
  }

  static associate(models){
    const { User } = models
    this.hasMany( User, {
      foreignKey: {
          name:  'profileId'
      },
      as: '_user'
    }) 
  }

 
}

module.exports = Profile
