// import de los controllers
const { getHora } = require('../controllers/getHora')

// Trae todas las horas de la db
const getHoras = async (req, res) => {
    try {
        
        const response = await getHora()

        return res.status(200).json(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
}

module.exports = {
    getHoras
}