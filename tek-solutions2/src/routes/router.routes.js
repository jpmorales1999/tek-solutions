const { Router } = require('express')

const router = Router()

// Controlador
const { listaIdCasos } = require('../controllers/router.controller')

router.get('/', listaIdCasos)

module.exports = router