const server = require('./src/app')
const dotenv = require('dotenv').config();
const { connect } = require('./src/database/db')


const port = process.env.PORT || 3001 

// Conexion a la DB
connect()
 
server.listen(port)