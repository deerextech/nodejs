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

// geocodeAddress(encodedAddress, callback).then((result)=>{
//   console.log('WTF', encodedAddress);
//   console.log('RESULT: ', result)
// }).catch((errorMessage)=>{
//   console.log('didnt wurk');
// })

// var geocodeAddress = (callback) =>{
//   const argv = yargs.argv;
//
//   var encodedAddress = encodeURIComponent(argv.address);
//
//   //make request
//   request({
//     url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
//
//     //url:'http://maps.googleapis.com/maps/api/geocode/json?address=730OntarioStreetToronto',
//     json:true
//   },(error, response, body)=>{
//     if(error){
//       callback('unable to connect to Google servers.');
//     }else if(body.status === 'ZERO_RESULTS'){
//       callback('unable to find that address');
//     }else if(body.status === 'OK'){
//       callback(undefined, {
//         address: body.results[0].formatted_address,
//         latitude:body.results[0].geometry.location.lat,
//         longitude: body.results[0].geometry.location.lng
//       });
//     }
//   });
// }

module.exports ={
  geocodeAddress
}
