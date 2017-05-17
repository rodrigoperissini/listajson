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

  beforeEach(angular.mock.module('listaDeClientesService'));

  beforeEach(inject(function(_listaDeClientesGenerate_) {
    listaDeClientesGenerate = _listaDeClientesGenerate_;
  }));

  it('should exist', function() {
    expect(listaDeClientesGenerate).toBeDefined();
  });

  it('should exist method', function() {
    expect(listaDeClientesGenerate.getClientes).toBeDefined();
  });

});





