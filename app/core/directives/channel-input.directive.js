angular.module('ZeroVidzUser').directive('channelInput', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind("keyup keydown keypress", function (event) {
                if (element[0].value){
                    scope.getChannel(element[0].value);
                }
            });
        }
    };
}]);