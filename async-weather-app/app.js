const geocode = require('./components/config/geocode');
const weather = require('./components/weather/weather');
const yargs = require('./components/config/yargsConfig');


const argv = yargs.argv;
var encodedAddress = encodeURIComponent(argv.address);


geocode.geocodeAddress(encodedAddress).then((results)=>{
  console.log('RESULT: ', results);
  weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults)=>{
    if(errorMessage){
      console.log('error:', errorMessage);
    }else{
      console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemp}`)
    }
  })
}).catch((errorMessage)=>{
  console.log('did not work');
})
