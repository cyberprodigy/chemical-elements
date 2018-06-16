var app = angular.module('app', ['ngRoute', 'appControllers']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider.
	when('/list', {
		templateUrl:'view/list.html',
		controller:'ListController'
	}).
	when('/details/:elemIdx', {
		templateUrl:'view/details.html',
		controller:'DetailsController'
	}).
	otherwise({
		redirectTo:'/list'
	});

}]);