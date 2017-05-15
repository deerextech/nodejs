const request = require('request');
const yargs = require('./yargsConfig');

const geocodeAddress = () =>{
  const argv = yargs.argv;

  var encodedAddress = encodeURIComponent(argv.address);

  console.log('what is argv outputting??????', argv);
  //make request
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,

    //url:'http://maps.googleapis.com/maps/api/geocode/json?address=730OntarioStreetToronto',
    json:true
  },(error, response, body)=>{
    if(error){
      console.log('unable to connect to Google servers.');
    }else if(body.status === 'ZERO_RESULTS'){
      console.log('unable to find that address');
    }else if(body.status === 'OK'){
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Longitude: : ${body.results[0].geometry.location.lng}`);
    }
  });
}

module.exports ={
  geocodeAddress
}
