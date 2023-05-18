const server = require('./src/app')
const dotenv = require('dotenv')
const { connect } = require('./src/database/db')


dotenv.config();


const port = process.env.PORT || 3001 
 

server.listen(port, () => {
    console.log(`Server raised in port: ${port}`);
})  

connect()