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
