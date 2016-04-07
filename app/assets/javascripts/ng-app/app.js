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
            templateUrl: 'orders/layout.html'
        })

        .state('orders.index', {
            url: '',
            templateUrl: 'orders/one.html'
        })
        // this is /orders/two
        .state('orders.import', {
            url: '/import',
            templateUrl: 'orders/import.html'
        })
        // this is /orders/three
        .state('orders.order', {
            url: '/:id',
            templateUrl: 'orders/three.html'
        });

            // the default route when someone hits orders
            // .state('orders.one', {
            //     url: '',
            //     templateUrl: 'orders/one.html'
            // })
            // // this is /orders/two
            // .state('orders.import', {
            //     url: '/import',
            //     templateUrl: 'orders/import.html'
            // })
            // // this is /orders/three
            // .state('orders.order', {
            //     url: '/:id',
            //     templateUrl: 'orders/three.html'
            // });


    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);

  });


