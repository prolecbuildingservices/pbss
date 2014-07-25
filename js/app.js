var prolec = angular.module('Prolec', ['ngRoute']);

prolec.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'main.html',
        name : 'main'
  	}).when('/contact', {
        templateUrl: 'contact.html',
        name : 'contact'
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

prolec.controller('MainCtrl', function ($scope, $location) {

    $scope.$on('$routeChangeSuccess', function () {
        ga('send', 'pageview', $location.url());
    });

	$scope.$on('$routeChangeStart', function(ev, next) {
 		$scope.routeName = next.name;
        scrollTo(0,0);
 	});

    $scope.initOrbit = function(){
        $(document).foundation();
    }
});

prolec.directive('scrollTo', function(){
    return {
        restrict : 'A',
        link : function(scope, el, attr) {
            var id = attr.scrollTo;
            el.on('click', function(){
                if(id){
                    $("body").animate({scrollTop: $(id).offset().top}, "slow");
                }
            });
        }
    }
});