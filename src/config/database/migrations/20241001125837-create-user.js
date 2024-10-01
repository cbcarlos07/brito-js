'use strict';
const tableName = 'tb_user'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			tableName,
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
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
				refresh_token: {
					type: Sequelize.STRING,
					allowNull: true
				},
        		profile_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'tb_profile',
						key: 'id'
					},
					onDelete: 'cascade',
					onUpdate: 'cascade'
				},
				created_at: Sequelize.DATE,
				updated_at: Sequelize.DATE,
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable({ tableName });
	},
};
