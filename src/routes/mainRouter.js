const { Router } = require('express');

// Importamos las rutas
const routeTurnos = require("./routeTurnos")
const loginRoute = require("./loginRoute")
const getRouteHora = require('./getRouteHora')


const mainRouter = Router();


// Ruta para los turnos
mainRouter.use("/turno", routeTurnos)

// Ruta para el login
mainRouter.use("/login", loginRoute)

// Ruta para traer los turnos de la DB
mainRouter.use("/getturnos", getRouteHora)



module.exports = mainRouter