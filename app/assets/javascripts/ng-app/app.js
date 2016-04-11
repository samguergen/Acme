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

        .state('import', {
            url: '/orders/import',
            templateUrl: 'orders/import.html',
        })

        .state('valid', {
            url: '/orders/valid',
            templateUrl: 'orders/valid.html',
        })

        .state('invalid', {
            url: '/orders/invalid',
            templateUrl: 'orders/invalid.html',
        })

        .state('saved', {
            url: '/orders/saved',
            templateUrl: 'orders/saved.html',
        })

        .state('order', {
            url: '/orders/:orderID',
            templateUrl: 'orders/order.html',
        })

        .state('orders', {
            url: '/orders',
            templateUrl: 'orders/all.html',
        });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);

  });
