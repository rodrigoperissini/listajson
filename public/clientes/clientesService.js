var listaDeClienteService = angular.module('listaDeClientesService',[]);

listaDeClienteService.factory('listaDeClientesGenerate', ['$http', function ($http){
    var listaDeClientesGenerate = [];
    listaDeClientesGenerate.getClientes = function () {
        return $http.get('/clientes/random');
    }
    return listaDeClientesGenerate;
}])