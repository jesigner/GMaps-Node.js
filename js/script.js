
$(document).on("ready",start);
function start(){
        $("#Submit").on("submit",function(e){e.preventDefault();});
        $("#Submit").on("click",viewMap);
        $("#Zoom").on("click",getZoom);
        $("#canvasZoneMap").gmap().bind("init",viewMap);
}

function viewMap(){
        /*var p_Lat = $("#Latitud").val();  
        var p_Lon = $("#Longitud").val();  */
        $('#canvasZoneMap').gmap('getCurrentPosition', function(position, status) {
            if ( status === 'OK' ){
                var clientPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                //Show object data
                alert(clientPosition);
                /*$('#canvasZoneMap').gmap('addMarker',{
                    'position': clientPosition, 
                    'bounds': true
                });
                $('#canvasZoneMap').gmap('addShape', 'Circle', { 
                    'strokeWeight': 0, 
                    'fillColor': "#008595", 
                    'fillOpacity': 0.25, 
                    'center': clientPosition, 
                    'radius': 15, 
                    'clickable': false 
                });*/
            }else{
                alert("Error : Reading GPS Data getCurrentPosition");
            }
        });

            /*$('#canvasZoneMap').gmap('addMarker', {
                'position': p_Lat+','+p_Lon, 
                'bounds': true 
            }).click(function(){
                    $('#canvasZoneMap').gmap(
                        'openInfoWindow', {
                            'content': 'CJavaPeru'
                        }, this);
               });*/

        //Leyendo datos de un archivo .json
        /*$('#canvasZoneMap').gmap().bind('init', function(evt, map){ 
            $.getJSON( 'json/demo.json', function(data) { 
                    $.each( data.markers, function(i, m) {
                        $('#canvasZoneMap').gmap('addMarker', { 
                            'position': new google.maps.LatLng(m.latitude, m.longitude), 
                            'bounds':true } );
                    });
            });                                                                                                                                                                                                                       
        });*/

        //Marcador de punto final
        /*$("#zoneMap").addWay({
            start: origin, // (obligatory)
            end:  [-11.981551,-77.000036], // Postal Address or GPS coordinates for the end marker (obligatory)
            route : 'way', // Block's ID for the route display (optional)
            langage : 'spanish' // language of the route detail (optional)
        });*/    
    }   

function getZoom(){
    alert($('#canvasZoneMap').gmap('option', 'zoom'));
}