var express = require('express');
var routes = require('./routes/routes.js');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.set('view engine','html');

app.use(express.static(path.join(__dirname,'/public')));
app.use('/clientes', routes);

app.get('/', function(req,res) {
    res.send('Pagina em express, acesse /clientes para lista');
});

app.listen(3000, function(err){
    if(!err)
    console.log('Node rodando na porta 3000');
    else
    console.log(err);
});

var server = app;
module.exports = server;


