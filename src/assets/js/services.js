// Services
// -----------------------

angular.module('coffeeApp.services', [])
    .factory('CoffeeService', function () {
        var _strength = '';

        return {

            setStrength: function (strength) {
                _strength = strength;
                return _strength;
            },

            getStrength: function (strength) {
                return _strength;
            }

        };
    });
