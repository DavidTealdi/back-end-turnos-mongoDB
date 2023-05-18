const model = require('../models/userTurnos')

const getHora = async () => {
    
    const horas = await model.find({
        dia: ["Viernes", "Sabado"]
    })
    
    return horas
}


module.exports = {
    getHora
}