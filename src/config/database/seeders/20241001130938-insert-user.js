'use strict';
const { Op, fn } = require('sequelize');
const md5 = require('md5')
const tableName = 'tb_user'
module.exports = {
	up: async (queryInterface, Sequelize) => {
    try {
        await queryInterface.bulkInsert(
          { tableName },
          [
            {
              name: 'Carlos Bruno',
              username: 'cbcarlos',
              email: 'cbcarlos07@gmail.com',
              profile_id: 1,
              password: md5('12345678'),
              created_at: fn('NOW'),
              updated_at: fn('NOW'),
            }
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
