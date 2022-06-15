// Importación Constants
const API_URL = require('../constans')
const axios = require('axios')

function discriminacionEdad(data, minEdad, maxEdad) {
    let array = []

    for (let index = 0; index < data.length; index++) {
        if (data[index].edad >= minEdad && data[index].edad <= maxEdad) {
            array.push(data[index])
        }
    }
    return array
}

function discriminacionGenero(data, genero) {
    let array = []

    for (let index = 0; index < data.length; index++) {
        if (data[index].sexo === genero) {
            array.push(data[index])
        }
    }
    return array
}

async function consumoAPI() {
    const response = await axios.get(API_URL)
    return response.data
}

function todoClasificado(data, genero) {
    let array = []
    let count = 0
    let edadMin = 0
    let edadMax = 20

    // De está forma se logrará clasificar por sexo y rangos de edades de 20 en 20 (0-20 20-40 60-80 80-100) (Se determina hasta 100 ya que la esperanza de vida es mucho menor)
    while (count != 4) {
        for (let index = 0; index < data.length; index++) {
            if (data[index].sexo === genero && (data[index].edad >= edadMin && data[index].edad <= edadMax)) {
                array.push(data[index])
            }
        }
        count+=1
        edadMin+=20
        edadMax+=20
    }
    return array
}

module.exports.discriminacionEdad = discriminacionEdad
module.exports.discriminacionGenero = discriminacionGenero
module.exports.consumoAPI = consumoAPI
module.exports.todoClasificado = todoClasificado