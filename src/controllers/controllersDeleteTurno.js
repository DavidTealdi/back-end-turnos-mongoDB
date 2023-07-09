const model = require('../models/userTurnos')

const deleteTurno = async (name, lastName, dia, hora) => {
    
    const response = await model.deleteOne({
        name,
        lastName,
        dia,
        hora
    })

    return response
}

module.exports = {deleteTurno}