const { Router } = require('express')

const route = Router()

// Controller
const { covidGeneros, covidEdades, covidTodos, covidOriginal } = require('../controllers/router.controller')

route.get('/', covidOriginal)

route.get('/generos/:sexo?', covidGeneros)

route.get('/edades/:edadMin/:edadMax', covidEdades)

route.get('/todos', covidTodos)

module.exports = route