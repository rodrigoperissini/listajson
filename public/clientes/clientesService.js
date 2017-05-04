var listaDeClientesService = angular.module('listaDeClientesService', []);

listaDeClientesService.factory('listaDeClientesGenerate',['$http','$q', function ($http,$q){
    
    var listaDeClientes = [];

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    return {

       getClientes : function(){

         for(var i = 0 ; i < 150 ; i++)
         {
             
             listaDeClientes.push( {
                 codigo : i+1,
                 nome : 'Teste ' + (i+1),
                 dataNascimento: randomDate(new Date(1950, 0, 1), new Date())
             });
         }
       return $q.when(listaDeClientes);
       }
    }
}]);
