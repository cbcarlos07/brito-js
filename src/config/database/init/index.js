const Sequelize = require('sequelize')
const dbConfig = require('../config')
const requireDir = require('require-dir');
const path = require('path')

const connection = new Sequelize(dbConfig);

const models = requireDir('../../../models', {
    filter: fullPath => {
      return path.basename(fullPath) !== 'index.js';
    },
  });

const inicializarModels = () => {
  Object.values(models)
      .filter(model => model.init)
      .map(model => model.init(connection))
      .map(model => model.associate && model.associate(connection.models))      
}  


inicializarModels()
module.exports = connection
