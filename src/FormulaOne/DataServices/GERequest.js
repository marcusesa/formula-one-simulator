(function() {
    'use strict';

    angular
        .module('formulaOneApp', [])
        .factory('GERequest', GERequest);

    GERequest.$inject = ['$http'];

    function GERequest($http) {

      var urlGE = 'http://app.globoesporte.globo.com/motor/formula-1/tabela/data/data.json';

      function getDataFromRespose(response) {
        return response.data;
      }

      return {
        getPromisse : function() {
          return $http.get(urlGE).then(getDataFromRespose);
        }
      };
    }
})();
