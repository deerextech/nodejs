const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

//environment variables that stores as key/value pairs
// 3000 is back up option
const port = process.env.PORT || 3000;


var app = express();

//connect express to handlebars. {
app.set('view engine', 'hbs');
//enable partials
hbs.registerPartials(__dirname + '/views/partials');
//__dir name that gets passed into file, and stores path to web node server

app.use((req, res, next)=>{
  var now = new Date().toString();
  var log = `DATE IS: ${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err)=>{
    if(err){
      console.log('unable to append file');
    }
  });
  next();
});

// app.use((req, res, next)=>{
//   res.render('maintenance.hbs');
//   next();
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear();
});

hbs.registerHelper('yell', (text)=>{
  return text.toUpperCase();
});

app.get('/',(req, res)=>{
  res.render('home.hbs',{
    welcomeMessage: 'This is CAAAARL',
    image:'http://www.deerexart.com/images/IMG_0278.jpg',
  });
});

app.get('/about', (req,res)=>{
  res.render('about.hbs',{
    welcomeMessage: 'This is CAAAARL',
    pageTitle: 'About Carl!'
  });
});

app.get('/bad',(req,res)=>{
  res.send({
    errorMessage:'unable to handle request'
  })
})

//optional second argument.
//run on port, then do something
//
//
app.listen(port, ()=>{
  console.log(`Server is up on port ${port}`);
});
