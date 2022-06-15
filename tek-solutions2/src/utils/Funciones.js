// Axios
const axios = require('axios')

// Base de datos
const sequelize = require('../database/database')

// Constants 
const API_URL = require('../constans')

// Model 
const Covid = require('../models/Covid')

async function refrescarBaseDeDatos() {
    await sequelize.sync({force: true})
}

// Reconstruye la tabla y vuelve a guardar la información de la API
async function reconstruirTablaGuardarDatosApi () {
    await refrescarBaseDeDatos()
    const response = await consumirAPI()
    for (let index = 0; index < response.length; index++) {
        await Covid.create({ id_de_caso: response[index].id_de_caso, informacion: response[index] })
    }
}

// Si no se repite el id se guarda uno nuevo
async function compararApiConDatosAlmacenados() {
    const response = await consumirAPI()
    for (let index = 0; index < response.length; index++) {
        const result = await Covid.findByPk(response[index].id_de_caso)
        if (!result) {
            await Covid.create({ id_de_caso: response[index].id_de_caso, informacion: response[index] })
        } 
    }
}

async function consumirAPI() {
    const response = await axios.get(API_URL)
    return response.data
}

module.exports.reconstruirTablaGuardarDatosApi = reconstruirTablaGuardarDatosApi
module.exports.compararApiConDatosAlmacenados = compararApiConDatosAlmacenados