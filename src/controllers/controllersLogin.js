const model = require('../models/userLogin')

// Busca el usuario que viene por body en la db para el login. 
const getLoginUser = async (user, password) => {

    const response = await model.find({
        user: user,
        password: password
    });

    return response
}

// Guarda un usuario nuevo en la db (CONTROLADOR SIN USO)
const postUser = async (data) => {
    
    const { user, password } = data;
    
    const newuser = await model.create({ user, password })
    
    return newuser
}


module.exports = {
    getLoginUser,
    postUser
}