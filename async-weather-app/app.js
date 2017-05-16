const geocode = require('./components/config/geocode');
const weather = require('./components/weather/weather');
const yargs = require('./components/config/yargsConfig');


const argv = yargs.argv;
var encodedAddress = encodeURIComponent(argv.address);

//
// geocode.geocodeAddress((errorMessage, results)=>{
//   if(errorMessage){
//     console.log('errorMessage:', errorMessage)
//   }else{
//     console.log('WEATHER FOR: ', results.address);
//     weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults)=>{
//       if(errorMessage){
//         console.log('error:', errorMessage);
//       }else{
//         console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemp}`)
//       }
//     });
//   }
//
// });

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
// geocodeAddress(encodedAddress, callback).then((result)=>{
//   console.log('SHOW ME ENCODED! ', encodedAddress);
//   console.log('RESULT: ', result)
// }).catch((errorMessage)=>{
//   console.log('didnt wurk ');
// })
