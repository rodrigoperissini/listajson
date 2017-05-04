var listaDeClientesApp = angular.module("listaDeClientesApp", ['listaDeClientesService']);

listaDeClientesApp.controller("bodyController", function($scope, $http, listaDeClientesGenerate){

    listaDeClientesGenerate.getClientes()
    .then(function (data) {
        $scope.clientes = data.data;
    })
})