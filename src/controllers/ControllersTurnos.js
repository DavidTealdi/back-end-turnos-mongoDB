const model = require('../models/userTurnos')


// Trae todos los registros
const getUsers = async () => {
    
    const user = await model.find()
    
    return user
}

// Trae todos los dias viernes
const getUsersByDayViernes = async () => {
    
    const response = await model.find({
        dia: 'Viernes'
    });

    return response
};
  
const getUsersByDaySabado = async () => {
    
    const response = await model.find({
        dia: 'Sabado'
    });

    return response
};

// Trae un registro por el id
const getUserById = async (id) => {
    
    const user = await model.find({
        _id: id
    })

    return user
}

// Crea un registro
const postUser = async (data) => {
    
    const { name, lastName, number, dia, hora } = data;
    
    const user = await model.create({ name, lastName, number, dia, hora })
    
    return user
}

// Elimina un registro por el id
const deleteUser = async (id) => {
    
    const result = await model.remove({
        _id: id
    })

    return {deleted: true}
}


module.exports = {
    getUsers,
    getUsersByDayViernes,
    getUsersByDaySabado,
    getUserById,
    postUser,
    deleteUser
};