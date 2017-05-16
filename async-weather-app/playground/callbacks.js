console.log('started');
var getUser = (id,callback) =>{
  var user = {
    id:id,
    name:'Some Name'
  };

  setTimeout(()=>{
    callback(user)
  }, 3000)
}

getUser(21,(userObj)=>{
  console.log('user', userObj)
})
;

console.log('doone');
