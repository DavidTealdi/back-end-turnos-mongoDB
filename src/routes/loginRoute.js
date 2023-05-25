const loginRoute = require('express').Router();

// Importamos los controladores
const { getLoginUser, postUser } = require('../controllers/controllersLogin')

// busca un usuario en la db para el login
loginRoute.get('/', async (req, res) => {
    
    try {
        
        const {user, password} = req.query 

        const response = await getLoginUser(user, password)

        res.status(200).json(response)

    } catch (error) {
        return res.status(404).send(error.message);
    }
});
 
// crea un usuario nuevo en la db (RUTA SIN USO)
loginRoute.post('/', async (req, res) => {
    try {
        const data = req.body

        const newUser = await postUser(data);
        
        return res.status(200).json(newUser);

    } catch (error) {
        return res.status(404).json(error.message);
    };
    
})


module.exports = loginRoute