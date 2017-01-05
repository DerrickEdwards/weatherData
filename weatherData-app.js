console.log( `*** WEATHER APP v1.0.0" ***` );

var Wunderground = require( "wundergroundnode" );
var myKey = "94d35539887201df";
var myWeather = new Wunderground( myKey );
 

var express = require('express');
var server = express();
server.use(express.static(__dirname + '/public'));
 
var port = 3000;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});



