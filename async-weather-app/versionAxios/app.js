const yargs = require('./components/yargsConfig');
const axios = require('axios'); //promise library

const argv = yargs.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

//use axios.get -> makes http get request //returns a promise
axios.get(geocodeUrl).then((response)=>{
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find that address.');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng =response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/a829d052482d55ef16c643efed58c4d9/${lat},${lng}`;

  console.log("RESPONSE: ", response.data.results[0].formatted_address);
  return axios.get(weatherUrl).then((response)=>{
    var temp = response.data.currently.temperature;
    var apparentTemp = response.data.currently.apparentTemperature
    console.log(`it is currently: ${temp}, it feels like ${apparentTemp}`);
  })
}).catch((e)=>{
  if(e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
  }
  else {
    console.log('ERROR: ', e.message);
  }
})
