/*Node.js es un sistema de eventos basado en javascript, el cual se basa en dependencias 
* en la carpeta node_modules del proyecto se almacena todas las dependencias descargadas
*/
/* Requiero la dependencia llamada express
*  Express: Es un Framework para programar en node.js, te hace la vida mas facil.
*/
var express = require("express");
/*Creando un server https*/
var app = express("http");
/*El server http va escuchar en el puerto 6969 y se va ejecutar una función cuando logre hacerlo*/
app.get("/:id",function (req,res)
    {
        //decode the geohash with geohash module
        var latlon = geohash.decodeGeoHash(req.params["id"]);
        console.log("latlon : " + latlon);
        var lat = latlon.latitude[2];
        console.log("lat : " + lat);
        var lon = latlon.longitude[2];
        console.log("lon : " + lon);
        zoom = req.params["id"].length + 2;
        console.log("zoom : " + zoom);
       
       // now we use the templating capabilities of express and call our template to render the view, and pass a few parameters to it
        /*res.render("index.ejs", { 
            layout: false, 
            lat:lat, 
            lon:lon, 
            zoom:zoom, 
            geohash:req.params["id"]
        });*/
    });

app.listen(6969,function(){
	/*Muestra en consola si realmente se escucho en el puerto 6969*/
	console.log("Se esta escuchando en el puerto 6969");
});
/* ........................ */