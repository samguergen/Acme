angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $http, Validations) {

      $scope.trigger = function(fileContent){
        Validations.triggerValidations(fileContent);
      }

      $scope.allOrderz = Validations.allOrdersJson;
      $scope.validOrderz = Validations.validOrdersJson;
      $scope.invalidOrderz = Validations.invalidOrdersJson;




});


