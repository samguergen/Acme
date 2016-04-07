angular
    .module('myApp', [
        'ngAnimate',
        'ui.router',
        'templates'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        })

        .state('orders', {
            abstract: true,
            url: '/orders',
            templateUrl: 'orders/layout.html',
            controller: 'HomeCtrl'
        })

        .state('orders.all', {
            url: '',
            templateUrl: 'orders/all.html',
            controller: 'HomeCtrl'
        })

        .state('orders.import', {
            url: '/import',
            templateUrl: 'orders/import.html',
            controller: 'HomeCtrl'
        })

        .state('orders.valid', {
            url: '/valid',
            templateUrl: 'orders/valid.html',
            controller: 'HomeCtrl'
        })

        .state('orders.order', {
            url: '/:id',
            templateUrl: 'orders/order.html',
            controller: 'HomeCtrl'
        });


    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);

  })

  .directive('fileChange',['$parse', function($parse){
  return{
    require:'ngModel',
    restrict:'A',
    controller: 'HomeCtrl',
    link:function($scope,element,attrs,ngModel){
      var attrHandler=$parse(attrs['fileChange']);
      var handler=function(e){
        $scope.$apply(function(){
          attrHandler($scope,{$event:e,files:e.target.files});
        });
      };
      element[0].addEventListener('change',handler,false);
    }
  }
}]);


    //   .filter('csvToObj',function(){
    //   return function(input){
    //     var rows=input.split('\n');
    //     var obj=[];
    //     angular.forEach(rows,function(val){
    //       var o=val.split(';');
    //       obj.push({
    //         designation:o[1],
    //         ...
    //         km:o[11]
    //       });
    //     });
    //     return obj;
    //   };
    // });




