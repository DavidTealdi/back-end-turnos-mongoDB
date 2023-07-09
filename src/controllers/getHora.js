const model = require('../models/userTurnos')

// Trae todos los turnos que hay en la DB. 
//(RUTA QUE USAMOS PARA DESABILITAR LOS TURNOS QUE YA HAY EN LA DB EN EL FRONTEND)
const getHora = async () => {
    
    const horas = await model.find({
        
        dia: ["Viernes", "Sabado"]
    
    })
    
    return horas
}


module.exports = {
    getHora
}