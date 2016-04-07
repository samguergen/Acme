angular
    .module('myApp', [
        'ngAnimate',
        'ui.router',
        'templates',
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
 }])

  .directive('fileReader', function() {
  return {
    scope: {
      fileReader:"="
    },
    link: function(scope, element) {
      $(element).on('change', function(changeEvent) {
        var files = changeEvent.target.files;
        if (files.length) {
          var r = new FileReader();
          r.onload = function(e) {
              var contents = e.target.result;
              scope.$apply(function () {
                scope.fileReader = contents;
              });
          };

          r.readAsText(files[0]);
        }
      });
    }
  };
});

//   .service('CSVConverterService', function () {

//     this.ex = function() {
//         alert('working');
//     }

//     this.convertToArray = function (csvString) {
//         alert(csvString);
//            // Your parser logic here or call to the third party
//     };

//     //var csv is the CSV file with headers
//     this.csvJSON = function(csv) {
//       var lines=csv.split("\n");
//       var result = [];
//       var headers=lines[0].split(",");
//       for(var i=1;i<lines.length;i++){
//           var obj = {};
//           var currentline=lines[i].split(",");
//           for(var j=0;j<headers.length;j++){
//               obj[headers[j]] = currentline[j];
//           }
//           result.push(obj);
//       }
//       //return result; //JavaScript object
//       return JSON.stringify(result); //JSON
//     }

// });






