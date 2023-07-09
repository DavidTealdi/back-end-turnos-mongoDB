const express = require('express');
const dotenv = require('dotenv').config();

// Rutas
const mainRouter = require('./routes/mainRouter')

const server = express();

const URL = process.env.URL_LOCAL || process.env.URL_REMOTA


// Middleware
server.use(express.urlencoded({extended: false}));
server.use(express.json())
server.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', URL);
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