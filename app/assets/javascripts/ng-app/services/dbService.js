//service for sending order json to database

angular.module('myApp')
.service('ToServer', function ($http) {
    this.saveToDB = function(ordersJson) {
        // console.log('orders in json are ', ordersJson);

      // $http({
      //   url: 'http://localhost:3000/orders',
      //   dataType: 'json',
      //   method: 'POST',
      //   data: {
      //       orders: ordersJson,
      //   },
      //   headers: {
      //       "Content-Type": "application/json"
      //   }

      //   }).success(function(response){
      //       console.log('response is ', response);
      //   }).error(function(error){
      //       console.log('error is ', error);
      //   });

//without json format req
      $http({
        url: 'http://localhost:3000/orders',
        method: 'POST',
        data: {
            orders: ordersJson,
        }
        }).success(function(response){
            console.log('response is ', response);
        }).error(function(error){
            console.log('error is ', error);
        });
    };




});