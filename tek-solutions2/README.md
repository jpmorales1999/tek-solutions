# Prueba # 2 - Tek Solutions

## Proceso de instalación 

 - Ejecutar el comando npm install
 - Crear una base de datos mariadb con el nombre teksolutions
 - Encender el servicio mysql en nuestro entorno local
 - Ejecutar el comando npm start

 ### Solución 
 
 *La problemática se resuelve desde dos aspectos aspectos diferentes*
 
 - Cada 10 min se hará una petición a la API y comprobará que no se repita el campo "id_de_caso" con los datos actualmente almacenados en la base de datos y posteriormente guardar el nuevo dato.
 - Cada 10 min se hará uso de un método de la librería sequelize que permite reconstruir la tabla por defecto para posteriormente consumir la API y guardar la información.
 - Accediendo a la ruta raíz '/' se podrá obtener un listado con todos los ids de los casos almacenados en base de datos