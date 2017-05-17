describe('bodyController tests', function() {

    var $rootScope, $scope, $controller,bodyController;

    beforeEach(module('listaDeClientesApp'));

    beforeEach(inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        bodyController = $controller('bodyController', {'$rootScope' : $rootScope, '$scope': $scope});
    }));

    it('should exist', function() {
        expect(bodyController).toBeDefined();
    });
});
//
//
//
//
//
//
//
//
//
//

describe('Test factory', function() {
  var listaDeClientesGenerate, $q, $httpBackend;
  var API = 'http://localhost:3000/clientes/';
  var RESPONSE_SUCCESS = [
    {
      codigo: 1,
      nome: 'Teste 1',
      dataNascimento: '1993-05-24T13:55:02'
    },
    {
      codigo: 2,
      nome: 'Teste 2',
      dataNascimento: '1993-05-24T13:55:02'
    }
  ];

  // Before each test load our api.users module
  beforeEach(angular.mock.module('listaDeClientesService'));

  beforeEach(inject(function(_listaDeClientesGenerate_,_$q_,_$httpBackend_) {
    listaDeClientesGenerate = _listaDeClientesGenerate_;
    $q = _$q_;
    $httpBackend = _$httpBackend_;
  }));

  it('should exist', function() {
    expect(listaDeClientesGenerate).toBeDefined();
  });

  it('should exist method', function() {
    expect(listaDeClientesGenerate.getClientes).toBeDefined();
  });

});