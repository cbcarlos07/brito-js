'use strict';
const tableName = 'tb_uf'
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
				acronym: {
					type: Sequelize.STRING(2),
					allowNull: false
				}
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable({ tableName });
	},
};
