const getRouteTurnosHora = require('express').Router();

const { getHora } = require('../controllers/getHora')


// Rutas
 
// Trae todas las horas de la db
getRouteTurnosHora.get('/', async (req, res) => {

    try {
        
        const response = await getHora()

        res.status(200).json(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
})

module.exports = getRouteTurnosHora