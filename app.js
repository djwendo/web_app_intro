const express = require('express');
const bodyParser = require('body-parser')

const app = express();
var counter = 0;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

app.use((req, res, next) => {
  counter++;
  req.counter = counter;
  next(); 
});

app.get('/', (req, res) => res.end("You requested the root route, and the counter is set to: " + req.counter));

app.get('/index.html', (req, res) => res.render('floop', {counter: req.counter}));

app.get('/loadForm', (req, res) => res.render("myForm"));

app.post('/sendForm', (req, res) => {
  var num1 = Number(req.body.num_one);
  var num2 = Number(req.body.num_two);
  counter = counter + num1 + num2;
  res.redirect('/index.html');
});

app.listen(3000, () => console.log("Express app listening on port 3000"));
