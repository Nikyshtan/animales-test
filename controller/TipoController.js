const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/Connection');

const Tipo = require('../models/Tipo');

async function getAll(req, res) {
    console.log("Pidiendo los tipos");

    let tipos = await Tipo.findAll();
    let data = {
        tipos,
        name : 'Nicole'
    }
    console.log(tipos);
    res.render('tipos', data)
}

module.exports = {
    getAll
};