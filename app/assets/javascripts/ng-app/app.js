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

        // .state('orders', {
        //     url: '/orders',
        //     templateUrl: 'orders/layout.html'
        // })

        .state('orders', {
            url: '/orders',
            templateUrl: 'orders/all.html',
        })

        .state('import', {
            url: '/import',
            templateUrl: 'orders/import.html',
        })

        .state('valid', {
            url: '/valid',
            templateUrl: 'orders/valid.html',
        })

        .state('invalid', {
            url: '/invalid',
            templateUrl: 'orders/invalid.html',
        })

        .state('saved', {
            url: '/saved',
            templateUrl: 'orders/saved.html',
        })

        .state('order', {
            url: '/:orderID',
            templateUrl: 'orders/order.html',
        });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);

  });
