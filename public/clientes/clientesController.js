var listaDeClientesApp = angular.module("listaDeClientesApp", ['listaDeClientesService']);

listaDeClientesApp.controller("bodyController", function($scope, $http, listaDeClientesGenerate){

    listaDeClientesGenerate.getClientes()
    .then(function (data) {
        console.log(data.data[0].codigo);
        $scope.clientes = data.data;
        
    })
})