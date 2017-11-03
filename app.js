// grab the things we need
var express = require('express');
var routes = require('./routes/routes')
var bodyParser = require('body-parser');
var app = express();
var port = 3750;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
app.use(routes);
app.listen(port, do_alive);

function do_alive() {
    console.log('alive on localhost: ' + port)
};