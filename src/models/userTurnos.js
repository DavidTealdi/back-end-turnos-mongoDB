const {Schema, model} = require('mongoose')

const userTurnoSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    lastName: {
        type: String,
        unique: false,
        required: true
    },
    number: {
        type: String,
        unique: false,
        required: false,
    },
    dia: {
        type: String,
        unique: false,
        required: true
    },
    hora: {
        type: String,
        unique: false, 
        required: true
    }
}, {
    versionKey: false,
    timestamps: false
})

module.exports = model('userTurno', userTurnoSchema)