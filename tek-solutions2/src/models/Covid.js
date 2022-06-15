const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')

const Covid = sequelize.define('Covids', {
    id_de_caso: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    informacion: {
        type: DataTypes.JSON
    },
}, {
    timestamps: false
})

module.exports = Covid