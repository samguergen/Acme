angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $http, $location, Validations) {

      $scope.trigger = function(fileContent){
        Validations.triggerValidations(fileContent);
        $location.path('/orders');
      }

      $scope.allOrderz = Validations.allOrdersJson;
      $scope.validOrderz = Validations.validOrdersJson;
      $scope.invalidOrderz = Validations.invalidOrdersJson;




});


