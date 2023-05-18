const turnosRoute = require('express').Router();

// import de los contraladores
const { getUsers, getUsersByDayViernes, getUsersByDaySabado, getUserById, postUser, deleteUser } = require('../controllers/ControllersTurnos')

 
// Rutas
 
// Trae todo los registros
turnosRoute.get('/', async (req, res) => {

    try {
        
        const response = await getUsers()

        res.status(200).json(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
})

// Trea los turnos por dia viernes
turnosRoute.get('/viernes', async (req, res) => {

    try {
        
        const response = await getUsersByDayViernes()

        res.status(200).json(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
})

// Trea los turnos por dia sabado
turnosRoute.get('/sabado', async (req, res) => {

    try {

        const response = await getUsersByDaySabado()
        
        res.status(200).json(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
})

// Trae un registro por el id
turnosRoute.get('/:id', async (req, res) => {

    try {
        
        const { id } = req.params

        const response = await getUserById(id)

        res.status(200).json(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
})

// Guarda un registro
turnosRoute.post('/', async (req, res) => {
    try {
        const data = req.body

        if(!data.name || !data.lastName) throw Error('Falta información obligatoria');

        const newUser = await postUser(data);
        
        return res.status(200).json(newUser);

    } catch (error) {
        return res.status(404).send(error.message);
    };
    
})

turnosRoute.delete('/:id', async (req, res) => {

    try {
        
        const { id } = req.params

        const response = await deleteUser(id)

        res.status(200).json(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
})

module.exports = turnosRoute