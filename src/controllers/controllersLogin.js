const model = require('../models/userLogin')
const {encrypt, compare} = require('../bcryptjs/bcrypt')

// Busca el usuario que viene por body en la db para el login. 
const getLoginUser = async (user, password) => {

    const userDB = await model.findOne({ user })

    const checkPassword = await compare(password, userDB.password)

    if (checkPassword) return userDB;

    if (!checkPassword) throw new Error ('Contraseña Invalida')
}

// Guarda un usuario nuevo en la db (CONTROLADOR SIN USO)
const postUser = async (user, password) => {
    
    const passwordHash = await encrypt(password)
    
    const newuser = await model.create({ 
        user, 
        password: passwordHash
    })
    
    return newuser
}


module.exports = {
    getLoginUser,
    postUser
}