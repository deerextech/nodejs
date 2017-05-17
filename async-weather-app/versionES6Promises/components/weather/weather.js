const request = require('request');
// const yargs = require('./yargsConfig');

getWeather = (lat, lng, callback) =>{
  request({
    url: `https://api.darksky.net/forecast/a829d052482d55ef16c643efed58c4d9/${lat},${lng}`,
    json:true
  },(error, response, body)=>{
    if(error){
      callback('unable to connect to Forecast.io servers.');
    }else if(response.statusCode === 404){
      callback('unable to find that address');
    }else if(response.statusCode === 200){
      callback(undefined, {
        temperature:body.currently.temperature,
        apparentTemp: body.currently.apparentTemperature
      });
    }
  });
}

module.exports.getWeather = getWeather;
