const getRouteTurnosHora = require('express').Router();

// Importamos los Handlers
const { getHoras } = require('../handlers/getHoraHandlers')


// Ruta
getRouteTurnosHora
    .get('/', getHoras)

   
module.exports = getRouteTurnosHora