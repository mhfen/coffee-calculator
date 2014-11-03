// Routers
// -----------------------

 angular.module('coffeeApp.routers', [])
	.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
            .when('/results/:cups', {
                templateUrl : 'pages/results.html',
                controller  : 'resultsController'
            });
    });
