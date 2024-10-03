'use strict';
const tableName = 'tb_bus'
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
				number_of_seats: {
					type: Sequelize.INTEGER,
					allowNull: false
				},
				description: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				company_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'tb_company',
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
