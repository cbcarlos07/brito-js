const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		username: {
			type: Sequelize.STRING,
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		refreshToken: {
			type: Sequelize.STRING,
			allowNull: true
		},
		profileId: {
			type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_profile',
                key: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
		},
      },
      {
        sequelize,			
        tableName: 'tb_user',
        timestamps: true,
        underscored: true,
		defaultScope: {
			attributes: {
			  exclude: ['password']
			},
		},
		scopes: {
			withPassword: {
				attributes: {
				include: ['password']
				}
			}
		}
      }
    );
    
    return this;
  }

  static associate(models){
    const { Profile } = models

    this.belongsTo( Profile, {
        foreignKey: {
            name:  'profileId'
        },
        as: '_profile'
    }) 
  }
}

module.exports = User
