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

