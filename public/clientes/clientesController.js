
var listaDeClientesApp = angular.module("listaDeClientesApp", ['listaDeClientesService']);

listaDeClientesApp.controller("bodyController", function($scope, $http, listaDeClientesGenerate){

    console.log("Teste");

    listaDeClientesGenerate.getClientes().then(function (response) {
           $scope.clientes = response;
    });

});

