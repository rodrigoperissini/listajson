var express = require('express');

var router = express.Router();

router.get('/', function(req,res) {
    res.sendFile(__dirname +'/public/clientes/index.html');
});

router.get('/random', function(req,res) {

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    

    var listaDeClientes = [];

         for(var i = 0 ; i < 150 ; i++)
         {
             
             listaDeClientes.push( {
                 codigo : i+1,
                 nome : 'Teste ' + (i+1),
                 dataNascimento: randomDate(new Date(1950, 0, 1), new Date())
             });
         }
        res.json(listaDeClientes);
    }
)

module.exports = router;