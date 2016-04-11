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
            url: '/orders',
            templateUrl: 'orders/all.html',
        })

        .state('import', {
            url: '/import',
            parent: '/orders',
            // templateUrl: 'orders/import.html',
            views : {
              '@': {
                templateUrl: 'orders/import.html',
              },
            }
        })

        .state('valid', {
            url: '/valid',
            parent: '/orders',
            // templateUrl: 'orders/valid.html',
           views : {
              '@': {
                templateUrl: 'orders/valid.html',
              },
            }

        })

        .state('invalid', {
            url: '/invalid',
            parent: '/orders',
            // templateUrl: 'orders/invalid.html',
           views : {
              '@': {
                templateUrl: 'orders/invalid.html',
              },
            }
        })

        .state('saved', {
            url: '/saved',
            parent: '/orders',
            // templateUrl: 'orders/saved.html',
           views : {
              '@': {
                templateUrl: 'orders/saved.html',
              },
            }
        })

        .state('order', {
            url: '/:orderID',
            parent: '/orders',
            // templateUrl: 'orders/order.html',
           views : {
              '@': {
                templateUrl: 'orders/order.html',
              },
            }
        });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);

  });
