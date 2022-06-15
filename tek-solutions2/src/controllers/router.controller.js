// Model 
const Covid = require('../models/Covid')

const routerController = {}

routerController.listaIdCasos = async (req, res) => {
    const array = []
    const listaIdCasos = await Covid.findAll()
    for (let index = 0; index < listaIdCasos.length; index++) {
        array.push(listaIdCasos[index].id_de_caso)
        
    }
    res.json({listaIdCasos: array})
}

module.exports = routerController