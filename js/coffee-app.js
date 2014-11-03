/*! Calculator App Build - 2014-11-02 */

// Coffee App
// -----------------------

var coffeeApp = coffeeApp || {};

coffeeApp.utils = {

	calculateWater : function (cups) {
		var waterInOunces = Number(cups)*8;

		return waterInOunces;
	},

	calculateCoffee : function (waterVolume) {
		var goldenRatio = 17.42,
			coffeeInOunces = Number(waterVolume)/goldenRatio;

		return coffeeInOunces.toFixed(2);
	},

	calculateTeaspoon : function (coffeeInOunces) {
		var coffeeInTeaspoons = Number(coffeeInOunces)*6;

		return coffeeInTeaspoons.toFixed(2);
	}
};

// Declare app level module which depends on services
angular.module('coffeeApp', [
	'ngRoute',
	'coffeeApp.routers',
	'coffeeApp.controllers'
]);



// Controllers
// -----------------------

angular.module('coffeeApp.controllers', [])
	.controller('mainController', function($scope, $location) {

		$scope.calculateCoffee = function(coffeeForm) {
			$location.path('/results/' + coffeeForm.cups);
		};

	})
	.controller('resultsController', function($scope, $routeParams) {

		$scope.utils = coffeeApp.utils;
		$scope.cups = $routeParams.cups;
		$scope.waterVolume = $scope.utils.calculateWater($routeParams.cups);
		$scope.coffeeVolume = $scope.utils.calculateCoffee($scope.waterVolume);
		$scope.coffeeTeaspoons = $scope.utils.calculateTeaspoon($scope.coffeeVolume);
    });


// Directives
// -----------------------


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


// Services
// -----------------------
