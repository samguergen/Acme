angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $stateParams, $location, Validations, ToServer) {

      //triggers validation inside validationService.js
      $scope.trigger = function(fileContent){
        Validations.triggerValidations(fileContent);
        $scope.retrieveValues();
        $location.path('/orders');
      }

      //saves orders from service and saves them to database
      $scope.save = function() {
        ToServer.saveToDB($scope.allOrderz);
      }

      //retrieves valid and invalid orders and binds them to scope so that they can display in the DOM
      $scope.retrieveValues = function() {
        $scope.allOrderz = Validations.allOrderz;
        $scope.validOrderz = Validations.validOrderz;
        $scope.invalidOrderz = Validations.invalidOrderz;

        $scope.allOrderzJson = Validations.allOrdersJson;
        $scope.validOrderzJson = Validations.validOrdersJson;
        $scope.invalidOrderzJson = Validations.invalidOrdersJson;
      };

      //captures relevant ID from URL to filter from list of orders and display in DOM
      $scope.currentURL = $stateParams;

});


