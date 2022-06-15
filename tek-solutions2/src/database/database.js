const { Sequelize } = require('sequelize')

// Conexión base de datos

const sequelize = new Sequelize('teksolutions', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
})

module.exports = sequelize