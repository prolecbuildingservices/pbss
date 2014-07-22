var prolec = angular.module('Prolec', ['ngRoute']);

prolec.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'main.html',
        name : 'main'
  	}).when('/contact', {
        templateUrl: 'contact.html',
        name : 'contact',
        controller : ['$scope', '$window', function($scope, $window){
    		$scope.sendEmail = function(){
    			window.location.href = "mailto:pbssurrey@gmail.com?subject=Contact%20from%20website&body="+$scope.contact.message;
    		};
        }]
  	}).when('/services', {
        templateUrl: 'services.html',
        name : 'services'
  	}).when('/team', {
        templateUrl: 'team.html',
        name : 'team'
  	}).when('/testimonials', {
        templateUrl: 'testimonials.html',
        name : 'testimonials'
  	}).otherwise({
        redirectTo: '/'
  	});
}]);

prolec.controller('MainCtrl', function ($scope) {

	$scope.$on('$routeChangeStart', function(ev, next, current) { 
 		$scope.routeName = next.name;
 	});
});