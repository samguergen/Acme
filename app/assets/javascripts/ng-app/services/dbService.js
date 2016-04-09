//service for sending order json to database

angular.module('myApp')
.service('ToServer', function ($http, $location) {
    this.saveToDB = function(ordersJson) {
        var response = [];
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
      // $http({
      //   url: 'http://localhost:3000/orders',
      //   method: 'POST',
      //   data: {
      //       commandes: ordersJson,
      //   }
      //   }).success(function(response){
      //       console.log('response is ', response);
      //   }).error(function(error){
      //       console.log('error is ', error);
      //   });

        $http.post('http://localhost:3000/orders', {listid : ordersJson}).then(function (result) {
            console.log('result from http post is ', result);
            response = result;
            $location.path('/');
        });

    };




});