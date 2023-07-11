const loginRoute = require('express').Router();

// Importamos los Handlers
const { getUserLogin, postUserLogin } = require('../handlers/loginHandlers')


// Rutas
loginRoute    
    .post('/login', getUserLogin)
    .post('/register', postUserLogin)

module.exports = loginRoute