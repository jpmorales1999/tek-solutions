// Utils Funciones
const { discriminacionGenero, discriminacionEdad, consumoAPI, todoClasificado } = require('../utils/descFunciones')

const routerController = {}

routerController.covidOriginal = async (req, res) => {
    const data = await consumoAPI()
    res.json({data})
}

routerController.covidGeneros = async (req, res) => {
    const { sexo } = req.params
    const data = await consumoAPI()
    
    // Si recibo el sexo
    if (sexo) {
        const resultadoSexo = discriminacionGenero(data, sexo.toUpperCase())
        res.json({resultadoSexo})
    } else {
        const femenino = discriminacionGenero(data, 'F')
        const masculino = discriminacionGenero(data, 'M')
        res.json({femenino: femenino, masculino: masculino})
    }   
}

routerController.covidEdades = async (req, res) => {
    // De la ruta se obtiene la edad mínima y máxima
    const { edadMin, edadMax } = req.params

    // Validar edades
    if (edadMin > edadMax) {
        res.json({message: "Por favor, ingrese un rango de edades válido (El primer parametro será la edad mínima y el segundo la máxima)"})
    } else {
        const data = await consumoAPI()
        const range = discriminacionEdad(data, edadMin, edadMax)
        res.json({range})
    }
}

routerController.covidTodos = async (req, res) => {
    const data = await consumoAPI()
    const femenino = todoClasificado(data, 'F')
    const masculino = todoClasificado(data, 'M')
    res.json({femenino: femenino, masculino: masculino})
}

module.exports = routerController