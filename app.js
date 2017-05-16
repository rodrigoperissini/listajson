var express = require('express');
var routes = require('./routes/routes.js');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.set('view engine','html');

app.use(express.static(path.join(__dirname,'/public')));
app.use('/clientes', routes);

app.get('/', function(req,res) {
    res.send('batata');
});

app.listen(3000, function(err){
    if(!err)
    console.log('Node rodando na porta 3000');
    else
    console.log(err);
});



