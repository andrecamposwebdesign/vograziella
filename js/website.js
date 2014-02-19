angular.module('website', []).
	config(function($routeProvider) {

		$routeProvider.
			when('/home', {templateUrl:'templates/home.html'}).
			when('/services', {templateUrl:'templates/services.html'}).
			when('/midia', {templateUrl:'templates/midia.html'}).
			when('/location', {templateUrl:'templates/location.html'}).
			when('/contact', {templateUrl:'templates/contact-template.html'}).
			otherwise({redirectTo:'/home', templateUrl:'templates/home.html'});
	});


function MainCtrl($scope, $location) {
	$scope.setRoute = function(route) {
		$location.path(route);
	}
}