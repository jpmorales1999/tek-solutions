/* Crear un servicio web que consuma un API de personas 
contagiadas con COVID en Colombia, se debe entregar la data 
discriminada por género, rangos de edades 0-20, 20-40, 40 o más */

const app = require('./app')

function main() {
    app.listen(app.get('port'), () => {
        console.log('Servidor corriendo en el puerto', app.get('port'))
    })
}

// Run server
main()