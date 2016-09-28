  myWeather.conditions().request( "54022", function(err, response){

        res.writeHead(200);
        res.write(`<p>*** Current Temperature For River Falls: ${ response.current_observation.temp_f } F</p>`);
        res.end();
    
    }); // end myWeather request




