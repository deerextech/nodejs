const request = require('request');
const yargs = require('./yargsConfig');

var geocodeAddress = (address) =>{
  return new Promise((resolve,reject)=> {
      //make request
    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      json:true
    },(error, response, body)=>{
      if(error){
        reject('unable to connect to Google servers.');
      }else if(body.status === 'ZERO_RESULTS'){
        reject('unable to find that address');
      }else if(body.status === 'OK'){
        resolve({
          address: body.results[0].formatted_address,
          latitude:body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  })
}

module.exports ={
  geocodeAddress
}
