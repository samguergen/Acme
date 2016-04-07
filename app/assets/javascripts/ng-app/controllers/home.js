angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $http) {

      $scope.theFile = [];

      $scope.readCsv = function() {
        alert($scope.fileContent);
      }

    });


