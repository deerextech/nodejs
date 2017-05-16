const geocode = require('./components/config/geocode');
const weather = require('./components/weather/weather');



geocode.geocodeAddress((errorMessage, results)=>{
  if(errorMessage){
    console.log('errorMessage:', errorMessage)
  }else{
    console.log('WEATHER FOR: ', results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults)=>{
      if(errorMessage){
        console.log('error:', errorMessage);
      }else{
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemp}`)
      }
    });
  }

});
