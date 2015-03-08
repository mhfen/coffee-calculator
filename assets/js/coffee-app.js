/*! Calculator App Build - 2015-03-08 */

// Coffee App
// -----------------------

var coffeeApp = coffeeApp || {};

coffeeApp.utils = {

	calculateWater : function (cups) {
		var waterInOunces = Number(cups)*8;

		return waterInOunces;
	},

	calculateLiters : function (cups) {
		var waterInLiters = Number(cups)*0.236588;

		return waterInLiters.toFixed(2);
	},

	calculateCoffee : function (waterVolume) {
		var goldenRatio = 17.42,
			coffeeInOunces = Number(waterVolume)/goldenRatio;

		return coffeeInOunces.toFixed(2);
	},

	calculateTablespoon : function (coffeeInOunces) {
		var coffeeInTablespoons = Number(coffeeInOunces)*2;

		return coffeeInTablespoons.toFixed(2);
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
		$scope.waterVolumeLiters = $scope.utils.calculateLiters($routeParams.cups);
		$scope.coffeeVolume = $scope.utils.calculateCoffee($scope.waterVolume);
		$scope.coffeeTablespoons = $scope.utils.calculateTablespoon($scope.coffeeVolume);
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
