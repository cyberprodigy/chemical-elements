var appControllers = angular.module('appControllers', []);

appControllers.controller('DetailsController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('model/data.js').then(function(dt) {
		$scope.elems = dt.data;
		$scope.elemIdx = $routeParams.elemIdx;
	});
}]);


appControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('model/data.js').then(function(dt) {
		$scope.elems = dt.data;
	});
}
]);