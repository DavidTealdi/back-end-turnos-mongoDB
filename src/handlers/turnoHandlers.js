// import de los contraladores
const { getUsers, getUsersByDayViernes, getUsersByDaySabado, getUserById, postUser, deleteUser } = require('../controllers/ControllersTurnos')


// Trae todo los registros (RUTA SIN USO)
const getTurnosHandler = async (req, res) => {
    
    try {
        
        const response = await getUsers()

        res.status(200).json(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
}

// Trae un registro por el id (RUTA SIN USO)
const getTurnosHandlerById = async (req, res) => {
    
    try {
        
        const { id } = req.params

        const response = await getUserById(id)

        res.status(200).json(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
}


// Trea los turnos por dia viernes
const getTurnosHandlerByViernes = async (req, res) => {
    
    try {
        
        const response = await getUsersByDayViernes()

        return res.status(200).json(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
}

// Trea los turnos por dia sabado
const getTurnosHandlerBySabado = async (req, res) => {
    
    try {

        const response = await getUsersByDaySabado()
        
        return res.status(200).json(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
}

// Guarda un turnos en la db
const postTurnoHandlers = async (req, res) => {
    
    const data = req.body

    let datos = {
        name: '',
        lastName: '',
        number: '',
        dia: '',
        hora: ''
    }

    datos.name = data.name.toLowerCase().trim()
    datos.lastName = data.lastName.toLowerCase().trim()
    datos.number = data.number.trim()
    datos.dia = data.dia
    datos.hora = data.hora

    try {

        if(!data.name || !data.lastName || !data.dia || !data.hora) throw Error('Falta información obligatoria');

        const newUser = await postUser(datos.name, datos.lastName, datos.number, datos.dia, datos.hora);
        
        return res.status(200).json(newUser);

    } catch (error) {
        return res.status(500).send(error.message);
    };
}

// Elimina los turnos que hay en las tablas viernes y sabado
const  deleteTurnoHandlers = async (req, res) => {
    
    try {
        
        const { id } = req.params

        const response = await deleteUser(id)

        return res.status(200).json(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
}

module.exports = {
    getTurnosHandler,
    getTurnosHandlerById, 
    getTurnosHandlerByViernes, 
    getTurnosHandlerBySabado, 
    postTurnoHandlers,
    deleteTurnoHandlers
}