const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/Connection');

const Tipo = require('../models/Tipo');
const Animal = require('../models/Animal');

async function getAll(req, res) {
    console.log("Pidiendo los tipos");

    let animales = await Animal.findAll( {include : ['tipo']} );
    let data = {
        animales,
        name : 'Nicole'
    }
    console.log(animales);
    res.render('animales', data)
}

module.exports = {
    getAll
};