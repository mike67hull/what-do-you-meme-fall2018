var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator')
var app = express();

//View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/*
var logger = function(req, res, next){
    console.log('Logging...');
}

app.use(logger);
*/

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set static path
app.use(express.static(path.join(__dirname, 'public')));



var users = [{
    id: 1,
    fname:'John',
    lname: 'Doe',
    email: 'jd@gmail.com'
},
{
    id: 2,
    fname:'Bob',
    lname: 'Smith',
    email: 'bs@gmail.com'
},
{
    id: 3,
    fname:'Jill',
    lname: 'Jackson',
    email: 'jj@gmail.com'
}]

app.get('/', function(req, res){
    res.render('index', {
        title: 'Customers',
        users: users
    })
});

app.post('/users/add', function(req, res){
    var newUser = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email
    }
    console.log(newUser)
});

app.listen(3000, function(){
    console.log('Server started on port 3000...');
})