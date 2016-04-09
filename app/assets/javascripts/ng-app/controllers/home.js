angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $state, $http, $location, $stateParams, $resource, Validations) {

      $scope.trigger = function(fileContent){
        Validations.triggerValidations(fileContent);
        $scope.retrieveValues();
        $location.path('/orders');
      }

      $scope.retrieveValues = function() {
        $scope.allOrderz = Validations.allOrderz;
        $scope.validOrderz = Validations.validOrderz;
        $scope.invalidOrderz = Validations.invalidOrderz;
      };

      $scope.allOrderzJson = Validations.allOrdersJson;
      $scope.validOrderzJson = Validations.validOrdersJson;
      $scope.invalidOrderzJson = Validations.invalidOrdersJson;

      $scope.saveDB = function() {
        $resource("http://www.localhost:3000/orders"){};
     //    $resource('http://127.0.0.1\\:3000/:business', {business:'businesses'}, {
     //    query: {method:'GET', isArray: true},
     //    save: {method:'POST', isArray: false}
     // });
      };

      $scope.orderURL = $stateParams.orderID;

      var objForURL = $stateParams;
      console.log('what', $stateParams.orderID);
      $scope.idForURL = parseInt(objForURL['orderId']);

console.log('path in ctrl is ', $location.path());
});


