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
        })

        .state('orders.all', {
            url: '',
            templateUrl: 'orders/all.html',
        })

        .state('orders.import', {
            url: '/import',
            templateUrl: 'orders/import.html',
        })

        .state('orders.valid', {
            url: '/valid',
            templateUrl: 'orders/valid.html',
        })

        .state('orders.invalid', {
            url: '/invalid',
            templateUrl: 'orders/invalid.html',
        })

        .state('orders.order', {
            url: '/:id',
            templateUrl: 'orders/order.html',
        });


    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);

  });
