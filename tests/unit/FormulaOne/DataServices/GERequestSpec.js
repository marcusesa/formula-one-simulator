describe('GERequest Server Calls', function() {

  var geRequest, mockHttpGEBackend;

  beforeEach(module('formulaOneApp'));

  beforeEach(inject(function($injector) {
    mockHttpGEBackend = $injector.get('$httpBackend');
    GERequest = $injector.get('GERequest');
  }));

  it('should return data about racers from GE', function() {
    var urlGE = 'http://app.globoesporte.globo.com/motor/formula-1/tabela/data/data.json';
    var rawGEData = {"pilotos": [{"nome":"Lewis Hamilton","equipe":"Mercedes","index":1,"pontos":"169","vitorias":"4","posicaoPiloto":1}]};

    mockHttpGEBackend.expectGET(urlGE).respond(rawGEData);

    var data;
    var promisse = GERequest.getPromisse().then(function(response) {
      data = response;
    });;

    mockHttpGEBackend.flush();

    expectedRawGEData = rawGEData;

    expect(data).toEqual(expectedRawGEData);
  });

  afterEach(function() {
    mockHttpGEBackend.verifyNoOutstandingExpectation();
    mockHttpGEBackend.verifyNoOutstandingRequest();
  });
});
