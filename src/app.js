const express = require('express');
const cors = require('cors')

// Rutas
const mainRouter = require('./routes/mainRouter')

const server = express();


// Middleware
server.use(cors())
server.use(express.urlencoded({extended: true}));
server.use(express.json())

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
 
// Middleware con las rutas
server.use(mainRouter)


module.exports = server