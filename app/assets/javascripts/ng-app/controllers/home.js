angular.module('myApp')
    .controller('HomeCtrl', function ($scope) {
        $scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];

        $scope.orders = [
        { id: 1,
          name: "Little Sim"
        },
        {
          id: 2,
          name: "Ashley DummyGirl"
        }
        ];

    });