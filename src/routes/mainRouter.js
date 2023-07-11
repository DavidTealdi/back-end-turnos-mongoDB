const { Router } = require('express');

// Importamos las rutas
const routeTurnos = require("./routeTurnos")
const loginRoute = require("./loginRoute")
const getRouteHora = require('./getRouteHora')
const turnoDeleteRoute = require('./turnoDeleteRoute')

const mainRouter = Router();


// Ruta para los turnos
mainRouter.use("/turno", routeTurnos)

// Ruta para el login
mainRouter.use("/autho", loginRoute)

// Ruta para traer los turnos de la DB
mainRouter.use("/getturnos", getRouteHora)

// Ruta para eliminar turnos
mainRouter.use('/turnodelete', turnoDeleteRoute)



module.exports = mainRouter