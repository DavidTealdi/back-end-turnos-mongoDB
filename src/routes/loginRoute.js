const loginRoute = require('express').Router();

// Importamos los Handlers
const { getUserLogin, postUserLogin } = require('../handlers/loginHandlers')


// Rutas
loginRoute
    .get('/', getUserLogin)
    .post('/', postUserLogin)

module.exports = loginRoute