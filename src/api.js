var _ = require('lodash');

var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=a3edeb38bcf33d1e1780546f59336f0d';

var kelvinToC = function(kelvin){
  return Math.round(kelvin - 273.15) + ' ˚C'
}



module.exports = function(latitude, longitude){
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then(function(response){
      return response.json();
    })
    .catch((e) => console.log('Error with request', e))
    .then(function(json){
      console.log('inside the json promise then');
      return {
        city: json.name,
        temperature: kelvinToC(json.main.temp),
        description: _.capitalize(json.weather[0].description)
      }
    });
}
