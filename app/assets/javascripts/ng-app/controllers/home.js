angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $state, $http, $location, $stateParams, Validations) {

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

      var objForURL = $stateParams
      console.log('what', objForURL);
      console.log($stateParams);
      $scope.idForURL = parseInt(objForURL['order_id']);

console.log('state paramzz are ', $stateParams);
// console.log('state issss ', $state.params);
});


