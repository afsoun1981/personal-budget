define(['angular'], function(angular) {
	console.log('grid');

	var module = angular.module('tutorial4.directive.grid',[])
	.directive('grid', function() {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'template/grid.html',
			scope: {},
			test: {
				header: '=',
				footer: '=',
				description: '=',
			},
			controller: function($scope) {
				$scope.header = 'Header';
				$scope.description = 'Spending panel description';
				$scope.footer = 'Footer';
			}		
		};
	});

	return module;
});
