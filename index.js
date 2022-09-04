const express = require('express')
const homeController = require('../animales/controller/HomeController')
const tipoController = require('../animales/controller/TipoController')
const animalesController = require('../animales/controller/AnimalController')
const app = express()
const port = 8080

// Servir contenido estatico
app.use( express.static('public'))
app.set('view engine', 'hbs');


app.get('/', homeController.home );
app.get('/tipos', tipoController.getAll);
app.get('/animales', animalesController.getAll);
app.get('*', homeController.notfound);
  

app.listen(port)

console.log('Aplicacion corriendo en puerto '+ port)