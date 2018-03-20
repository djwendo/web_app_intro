var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var counter = 0;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  counter++;
  req.counter = counter;
  next(); 
});

app.get('/', function(req, res) {
  res.end("You requested the root route, and the counter is set to: " + req.counter);
});

app.get('/index.html', function(req, res) {
  res.render('floop', {counter: req.counter});
});

app.get('/loadForm', function(req, res) {
  res.render("myForm");
});

app.post('/sendForm', function(req, res) {
  var num1 = Number(req.body.num_one);
  var num2 = Number(req.body.num_two);
  counter = counter + num1 + num2;
  res.redirect('/index.html');
});

app.listen(3000, function() {
  console.log("Express app listening on port 3000");
});
