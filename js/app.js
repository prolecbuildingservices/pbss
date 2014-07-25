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
        $('.carousel').slick({
            arrows : false,
            autoplay : false,
            dots : true,
            slidesToShow : 2,
            slidesToScroll : 2,
            responsive: [{
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }]
        });
    }
});

prolec.directive('scrollTo', function(){
    var nav = $('nav');
    return {
        restrict : 'A',
        link : function(scope, el, attr) {
            var id = attr.scrollTo;
            el.on('click', function(){
                if(id){
                    nav.removeClass('expanded');
                    $("body").animate({scrollTop: $(id).offset().top - 40}, "200");
                    $('.top-bar-section li').removeClass('active');
                    el.parents('li:first').addClass('active');
                }
            });
        }
    }
});