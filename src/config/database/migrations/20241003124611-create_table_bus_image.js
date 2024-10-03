'use strict';
const tableName = 'tb_bus_image'
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
				bus_id: {
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
				created_at: Sequelize.DATE,
				updated_at: Sequelize.DATE,
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable({ tableName });
	},
};
