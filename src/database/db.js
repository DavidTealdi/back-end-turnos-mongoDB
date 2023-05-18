const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

// const dbMongo = process.env.DB_MONGODB || process.env.DB_MONGODB_LOCAL
const dbMongoDeploy = process.env.DB_MONGODB || process.env.DB_MONGODB

// const connect = async () => {

//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect(dbMongo) 
//         console.log('Mongo connected')
//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }

const connect = async () => {

    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(dbMongoDeploy) 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}


module.exports =  {
    connect
}