const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/Connection');

const tipo = require('../models/Tipo')

class Animal extends Model {}

Animal.init(
    {
  idanimales: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: DataTypes.STRING,
  idtipo: DataTypes.INTEGER
}, {
    sequelize, //Conexion
  modelName: 'animales' // We need to choose the model name
});

Animal.tipo = Animal.belongsTo(tipo, {as: 'tipo', foreignKey: 'idtipo'});

module.exports = Animal;