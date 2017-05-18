var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should();
var expect = chai.expect().expect;
var jsdom = require('mocha-jsdom');



chai.use(chaiHttp);



describe('Check the /random list', function () {
    it('check if status is 200 and contains the full list', function (done) {
        chai.request(server)
            .get('/clientes/random')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.text.should.contain('Teste 150');
                done();
            });
    });
});

describe('Check the client list page', function () {
    it('check if status is 200 and contains the full list', function (done) {
        chai.request(server)
            .get('/clientes')
            .end(function (err, res) {
                res.should.have.status(200);
                res.text.should.contain('<h1 class="jumbotron center"> Lista de Clientes </h1>');
                done();
            });
    });
});
