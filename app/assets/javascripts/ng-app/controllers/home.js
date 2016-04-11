angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $state, $http, $location, $stateParams, Validations, ToServer) {

      $scope.trigger = function(fileContent){
        Validations.triggerValidations(fileContent);
        $scope.retrieveValues();
        $location.path('/orders');
      }

      $scope.save = function() {
        ToServer.saveToDB($scope.allOrderz);
      }

      $scope.retrieveValues = function() {
        $scope.allOrderz = Validations.allOrderz;
        $scope.validOrderz = Validations.validOrderz;
        $scope.invalidOrderz = Validations.invalidOrderz;

        $scope.allOrderzJson = Validations.allOrdersJson;
        $scope.validOrderzJson = Validations.validOrdersJson;
        $scope.invalidOrderzJson = Validations.invalidOrdersJson;
      };

      console.log($stateParams);
        $scope.loc = $stateParams.orderID;
});


