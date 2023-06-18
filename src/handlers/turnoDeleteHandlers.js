const { deleteTurno } = require('../controllers/controllersDeleteTurno')


const deleteTurnoHandlers = async (req, res) => {

    const data = req.body

    let obj = {
        name: '', 
        lastName: '', 
        dia: '', 
        hora: ''
    }
    
    try {

        if(!data.name || !data.lastName || !data.dia || !data.hora ) throw new Error('Error: Falta informacion')

        obj.name = data.name.toLowerCase().trim()
        obj.lastName = data.lastName.toLowerCase().trim()
        obj.dia = data.dia
        obj.hora = data.hora
        
        const response = await deleteTurno(obj.name, obj.lastName, obj.dia, obj.hora)

        res.status(200).send(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
}

module.exports = {deleteTurnoHandlers}