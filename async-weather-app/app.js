const geocode = require('./components/config/geocode');

geocode.geocodeAddress((errorMessage, results)=>{
  if(errorMessage){
    console.log('errorMessage:', errorMessage)
  }else{
    console.log(JSON.stringify(results, undefined, 2));
  }

});
