angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $http, $location, Validations) {

      $scope.trigger = function(fileContent){
        Validations.triggerValidations(fileContent);
        $location.path('/orders');
      }

      $scope.allOrderzJson = Validations.allOrdersJson;
      $scope.validOrderzJson = Validations.validOrdersJson;
      $scope.invalidOrderzJson = Validations.invalidOrdersJson;

      $scope.allOrderz = Validations.allOrders;
      $scope.validOrderz = Validations.validOrders;
      $scope.invalidOrderz = Validations.nonValidOrders;

});


