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
          $http({
            url: 'http://localhost:3000/orders',
            dataType: 'json',
            method: 'POST',
            data: {
                orders: $scope.allOrderzJson,
            },
            headers: {
                "Content-Type": "application/json"
            }

            }).success(function(response){
                console.log('response is ', response);
            }).error(function(error){
                console.log('error is ', error);
            });
        };

      $scope.orderURL = $stateParams.orderID;

      var objForURL = $stateParams;
      console.log('what', $stateParams.orderID);
      $scope.idForURL = parseInt(objForURL['orderId']);

console.log('path in ctrl is ', $location.path());
});


