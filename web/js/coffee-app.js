/*! Calculator App Build - 2014-11-02 */

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



// Controllers
// -----------------------

angular.module('coffeeApp.controllers', [])
  .controller('calculatorController', function($scope) {

		$scope.utils = coffeeApp.utils;


  });


// Directives
// -----------------------


// Services
// -----------------------
