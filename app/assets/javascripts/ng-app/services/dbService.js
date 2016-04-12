//service for sending order json to database

angular.module('myApp')
.service('ToServer', function ($http) {
    this.saveToDB = function(ordersJson) {
        var response = [];

        var orders = ordersJson.toString();
        console.log('length of orders is ', orders.length);

        for (var i in ordersJson) {
          console.log(ordersJson[i]);
          $http.post('http://localhost:3000/orders', {commandes : ordersJson[i]}).then(function (result) {
            console.log('result from http post is ', result);
            response = result;
          });
        };

    };




});