'use strict';
const { Op, fn } = require('sequelize');
const tableName = 'tb_profile'
module.exports = {
	up: async (queryInterface, Sequelize) => {
    try {
        await queryInterface.bulkInsert(
          { tableName },
          [
            {
              id: 1,
              name: 'Administrador',
              created_at: fn('NOW'),
              updated_at: fn('NOW')
            },
            
          ]
          
        )
        Promise.resolve()
    } catch (error) {
      
      Promise.reject(error)
    }
	},
	down: queryInterface => {
    return queryInterface.bulkDelete(
      { schema, tableName },
      { id: { [Op.in]: [1] } }
    );
  },

};
