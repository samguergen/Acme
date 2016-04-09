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

        $scope.loc = $location.absUrl();

        $scope.orderURL = $stateParams.orderID;
        var objForURL = $stateParams;
        console.log('what', $stateParams.orderID);
        $scope.idForURL = parseInt(objForURL['orderId']);

      $scope.disp = function() {
        $scope.peeker = $location.path();
        return $scope.peeker
      }
});


