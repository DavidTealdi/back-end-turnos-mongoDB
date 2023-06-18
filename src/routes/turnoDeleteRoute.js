const turnosDeleteRoute = require('express').Router();

const { deleteTurnoHandlers } = require('../handlers/turnoDeleteHandlers')

turnosDeleteRoute
    .delete('/', deleteTurnoHandlers)


module.exports = turnosDeleteRoute 