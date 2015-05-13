define(['angular'], function(angular) {
    console.log('sample');

	var module = angular.module('tutorial4.sample', [])
	.controller('SampleCtrl', [function() {
		this.value = 'reza';
	}]);
	
	return module;
});