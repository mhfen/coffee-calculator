// Coffee App
// -----------------------

var coffeeApp = coffeeApp || {};

coffeeApp.utils = {


}; // end: coffeeApp.utils

// Declare app level module which depends on services
angular.module('coffeeApp', [
	'ngRoute',
	'coffeeApp.controllers',
	'coffeeApp.services',
	'coffeeApp.directives'
]);

