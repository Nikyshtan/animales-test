const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/Connection');

class Tipo extends Model {}

Tipo.init({
  idtipo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: DataTypes.STRING
}, {
  sequelize, //Conexion
  modelName: 'Tipo' // We need to choose the model name
});


module.exports = Tipo;