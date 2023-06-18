const model = require('../models/userTurnos')

const deleteTurno = async (name, lastName, dia, hora) => {
    
    const response = await model.deleteOne({
        name: name,
        lastName: lastName,
        dia: dia,
        hora: hora
    })

    return response
}

module.exports = {deleteTurno}