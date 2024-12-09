const Sequelize = require('sequelize');

class MinhaModel extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {

        idDaModel: {
          type: Sequelize.INTEGER,
          primaryKey: true, // Define esta coluna como chave primária
          allowNull: false, // Define que não pode ser nulo
          autoIncrement: false, // Se a chave primária for auto incrementável,
          field: 'ID_MODEL'
        },
        dsModel: {
          type: Sequelize.STRING,
          field: 'DS_MODEL'
        }
        
      },
      {
        sequelize,			
        tableName: 'VIEW_LISTA_TIPO_PORTLET',
        timestamps: false,
        underscored: true
      }
    );
    
    return this;
  }

  static associate(models){
    //const {  } = models
  }

}

module.exports = MinhaModel
