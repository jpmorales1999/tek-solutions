const express = require('express')

const app = express()

// Importación rutas
const routes = require('./routes/router.routes')

// Configuración
app.set('port', process.env.PORT || 4000)

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', routes)

module.exports = app