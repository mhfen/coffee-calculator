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

	calculateCoffee : function (waterVolume, ratio) {
		var goldenRatio = ratio;
		var coffeeInOunces = Number(waterVolume)/goldenRatio;

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
	'coffeeApp.controllers',
	'coffeeApp.services'
]);

