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
}).directive('quoterize', function($timeout){
    var quotes = ['"You are WRONG, you ol\' brass-breasted fascist poop!" -- Bloom County',
       '"It is hard to overstate the debt that we owe to men and women of genius." -- Robert G. Ingersoll',
       'These screamingly hilarious gogs ensure owners of X Ray Gogs to be the life of any party. -- X-Ray Gogs Instructions',
       '"It is the creationists who blasphemously are claiming that God is cheating us in a stupid way." -- J. W. Nienhuys',
       '"I remember when I was a kid I used to come home from Sunday School and my mother would get drunk and try to make pancakes." -- George Carlin',
       '"A great many people think they are thinking when they are merely rearranging their prejudices." -- William James',
       '"All the people are so happy now, their heads are caving in. I\'m glad they are a snowman with protective rubber skin" -- They Might Be Giants',
       '"There is no distinctly American criminal class except Congress." -- Mark Twain',
       '"Most of us, when all is said and done, like what we like and make up reasons for it afterwards." -- Soren F. Petersen',
       '"The whole problem with the world is that fools and fanatics are always so certain of themselves, but wiser people so full of doubts." -- Bertrand Russell'
       ];
    return {
        restrict : 'E',
        replace : false,
        template : '<div class="quote"><span></span></div>',
        link : function(scope, el, attr){

            var i = 0, sp = $('span:first', el);

            sp.hide();

            function fadeInAndOut(){
                sp.text(quotes[i]);
                sp.fadeIn(300, function(){
                    $timeout(function(){
                        i = (i === (quotes.length-1) ? 0 : (i+1));
                        sp.fadeOut(300, fadeInAndOut);
                    }, 3000);
                });
            }

            fadeInAndOut();
        }
    }
});