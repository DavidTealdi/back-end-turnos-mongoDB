const express = require('express');

const server = express();

const turnosRoute = require('./routes/routeTurnos')
const getRouteTurnosHora = require('./routes/getRouteTurnos')
const loginRoute = require('./routes/loginRoute')

// middleware

server.use(express.json())

server.use(express.urlencoded({ extended: false }))

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
 

// RUTA PRINCIPAL
server.get('/', (req, res) => {
    res.status(200).send('Ruta principal')
})

// RUTAS
server.use('/turno', turnosRoute)

server.use('/getturnos', getRouteTurnosHora)

server.use('/login', loginRoute)


module.exports = server