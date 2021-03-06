// Controllers
// -----------------------

angular.module('coffeeApp.controllers', [])
	.controller('mainController', function($scope, $location, CoffeeService) {

		$scope.calculateCoffee = function(coffeeForm) {
			CoffeeService.setStrength(coffeeForm.strength);
			$location.path('/results/' + coffeeForm.cups);
		};

	})
	.controller('resultsController', function($scope, $routeParams, CoffeeService) {
		$scope.strength = CoffeeService.getStrength() || 17.42;
		$scope.utils = coffeeApp.utils;
		$scope.cups = $routeParams.cups;
		$scope.waterVolume = $scope.utils.calculateWater($routeParams.cups);
		$scope.waterVolumeLiters = $scope.utils.calculateLiters($routeParams.cups);
		$scope.coffeeVolume = $scope.utils.calculateCoffee($scope.waterVolume, $scope.strength);
		$scope.coffeeTablespoons = $scope.utils.calculateTablespoon($scope.coffeeVolume);

    });
