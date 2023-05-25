const express = require('express');

const server = express();

// ruta para post, get y delete de los turnos
const turnosRoute = require('./routes/routeTurnos')

// ruta para get de los turnos saber que turnos hay en la db y sacar las hora en los options
const getRouteTurnosHora = require('./routes/getRouteHora')

// ruta para iniciar sesion y logiarse
const loginRoute = require('./routes/loginRoute')

// middleware
server.use(express.json())

server.use(express.urlencoded({ extended: false }))
server.use(express.urlencoded({ extended: true }))

server.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});
 
 
// RUTAS

// lleva y trae los turnos
server.use('/turno', turnosRoute)

// trae los turnos que hay en la db para sacarlos del options
server.use('/getturnos', getRouteTurnosHora)

// ruta de login. Trae y lleva los usuarios registrados
server.use('/login', loginRoute)


module.exports = server