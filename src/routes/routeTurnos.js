const turnosRoute = require('express').Router();


// Importamos los Handlers
const {
    
    getTurnosHandler, 
    getTurnosHandlerById, 
    getTurnosHandlerByViernes, 
    getTurnosHandlerBySabado, 
    postTurnoHandlers, 
    deleteTurnoHandlers 

} = require('../handlers/turnoHandlers')


// Rutas
turnosRoute
    .get('/', getTurnosHandler)
    .get('/viernes', getTurnosHandlerByViernes)
    .get('/sabado', getTurnosHandlerBySabado)
    .get('/:id', getTurnosHandlerById)
    .post('/', postTurnoHandlers)
    .delete('/:id', deleteTurnoHandlers)

module.exports = turnosRoute