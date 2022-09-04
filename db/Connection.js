"use strict";

const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const db = new Sequelize('animales', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true
});

module.exports = db;