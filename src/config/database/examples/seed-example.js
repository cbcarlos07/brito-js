'use strict';
const { Op, fn } = require('sequelize');
const tableName = 'tb_uf'
module.exports = {
	up: async (queryInterface, Sequelize) => {
    try {
        await queryInterface.bulkInsert(
          { tableName },
          [
            {
              name: 'Rondônia',
              acronym: 'RO'
            },
            {
              name: 'Acre',
              acronym: 'AC'
            },
            {
              name: 'Amazonas',
              acronym: 'AM'
            },
            {
              name: 'Roraima',
              acronym: 'RR'
            },
            {
              name: 'Pará',
              acronym: 'PA'
            },
            {
              name: 'Amapá',
              acronym: 'AP'
            },
            {
              name: 'Tocantins',
              acronym: 'TO'
            },
            {
              name: 'Maranhão',
              acronym: 'MA'
            },
            {
              name: 'Piauí',
              acronym: 'PI'
            },
            {
              name: 'Ceará',
              acronym: 'CE'
            },
            {
              name: 'Rio Grande do Norte',
              acronym: 'RN'
            },
            {
              name: 'Paraíba',
              acronym: 'PB'
            },
            {
              name: 'Pernambuco',
              acronym: 'PE'
            },
            {
              name: 'Alagoas',
              acronym: 'AL'
            },
            {
              name: 'Sergipe',
              acronym: 'SE'
            },
            {
              name: 'Bahia',
              acronym: 'BA'
            },
            {
              name: 'Minas Gerais',
              acronym: 'MG'
            },
            {
              name: 'Espírito Santo',
              acronym: 'ES'
            },
            {
              name: 'Rio de Janeiro',
              acronym: 'RJ'
            },
            {
              name: 'São Paulo',
              acronym: 'SP'
            },
            {
              name: 'Paraná',
              acronym: 'PR'
            },
            {
              name: 'Santa Catarina',
              acronym: 'SC'
            },
            {
              name: 'Rio Grande do Sul',
              acronym: 'RS'
            },
            {
              name: 'Mato Grosso do Sul',
              acronym: 'MS'
            },
            {
              name: 'Mato Grosso',
              acronym: 'MT'
            },
            {
              name: 'Goiás',
              acronym: 'GO'
            },
            {
              name: 'Distrito Federal',
              acronym: 'DF'
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
