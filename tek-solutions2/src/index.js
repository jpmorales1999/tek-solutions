/* Se debe crear un servicio que consulte y guarde cada 10 
minutos la información de contagiados de COVID en Colombia 
sin que esta se repita para los datos previamente guardados.
Se debe crear un servicio web que consulte de la tabla 
previamente creada con la opción de filtrar por género, estado y 
ciudad (todos los filtros son opcionales), debe entregar solo una 
lista con los id de casos */

const app = require('./app')

// Importar modelo
require('./models/Covid')

// Base de datos
const sequelize = require('./database/database')

// Utils
const { reconstruirTablaGuardarDatosApi, compararApiConDatosAlmacenados } = require('./utils/Funciones')

// Permitirá ejecutar una acción cada cierta cantidad de tiempo según se especifique en el código en este caso (10 min = 600000 milisegundos)

setInterval(async () => {
    await reconstruirTablaGuardarDatosApi()
    // await compararApiConDatosAlmacenados()
}, 600000);


async function main() {
    try {
        await sequelize.sync() // Trata de crear tablas

        app.listen(app.get('port'), () => {
            console.log('Servidor corriendo en el puerto', app.get('port'))
        })
    } catch (error) {
        console.log(error)
    }
}

// Run server
main()