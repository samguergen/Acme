angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $rootScope, $http, $stateParams, $state, $location, $log, Validations, ToServer) {

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
    //   console.log($stateParams);
    //   if ((Object.keys($stateParams).length === 0) && (JSON.stringify($stateParams) === JSON.stringify({}))) {
    //     console.log('the obj is empty');
    //   }
    //   else {
    //     console.log('the obj isnt empty');
    //   }


    //   $scope.$watchCollection(function(){
    //   return $state.params;
    //   }, function(){
    //   $log.info("State params have been updated", $scope.$stateParams);
    // });


  $scope.test = $stateParams;
  $scope.test2 = $stateParams.orderID;
  console.log('the state params are ');
  console.log($stateParams.orderID);

});


