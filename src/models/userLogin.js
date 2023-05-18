const {Schema, model} = require('mongoose')

const userLoginSchema = new Schema({
    user: {
        type: String,
        unique: false,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    }
}, {
    versionKey: false,
    timestamps: false
})

module.exports = model('userLogin', userLoginSchema)