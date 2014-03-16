/*Node.js es un sistema de eventos basado en javascript, el cual se basa en dependencias 
* en la carpeta node_modules del proyecto se almacena todas las dependencias descargadas
*/

/*Requiero la dependencia llamada express
* Express: Es un Framework para programar en node.js, te hace la vida mas facil.
*/
var express = require("express");
/*Creando un server https*/
var app = express("http");
/*El server http va escuchar en el puerto 6969 y se va ejecutar una función cuando logre hacerlo*/
app.listen(6969,function(){
	/*Muestra en consola que si se escucho en el puerto 6969*/
	console.log("Se esta escuchando en el puerto 6969");
});
/* ........................ */