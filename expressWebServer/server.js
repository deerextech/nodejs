const express = require('express');
const hbs = require('hbs');

var app = express();

//connect express to handlebars. {
app.set('view engine', 'hbs');
//enable partials
hbs.registerPartials(__dirname + '/views/partials');
//__dir name that gets passed into file, and stores path to web node server
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear();
})


app.get('/',(req, res)=>{
  res.render('home.hbs',{
    welcomeMessage: 'This is CAAAARL',
    image:'http://www.deerexart.com/images/IMG_0278.jpg',
  })
});

app.get('/about', (req,res)=>{
  res.render('about.hbs',{
    pageTitle: 'About Carl!',
  });
});
app.get('/bad',(req,res)=>{
  res.send({
    errorMessage:'unable to handle request'
  })
})

//optional second argument.
//run on port, then do something
app.listen(3000, ()=>{
  console.log('Server is up on pt:3000')
});
