var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=a3edeb38bcf33d1e1780546f59336f0d';

var kelvinToC = function(kelvin){
  return Math.round(kelvin - 273.15) + ' ˚C';
};

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
  console.log(url);

  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .catch((e) => console.log('Error with request', e))
    .then(function(json){
      return {
        city: json.name,
        temperature: json.main.temp,//kelvinToC(json.main.temp),
        description: json.weather[0].description
      }
    });
}
