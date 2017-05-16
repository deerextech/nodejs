console.log('i started!');

//async callback example
setTimeout(()=>{
  console.log('watch when i fire')
},2000)

//this will print 3rd even tho it is set to 0
//
setTimeout(()=>{
  console.log('watch when i fire 0')
},0)
console.log('finishing')

//CallStack ex 1
// console.log('started');
// var x = 1;
// var y = x + 1;
// console.log(`y is ${y}`);
// console.log('finished');

//ex 2
// var add = (a,b)=>{
//   console.log('happened');
//   var total = a + b;
//   //return removes from callstack
//   return total
// }
//
// var res = add(3,8);
// console.log(res); //implicit return therefore is poped off stack when done
