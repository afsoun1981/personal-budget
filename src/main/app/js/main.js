define('main', ['angular', 'sample', 'service1', 'service2'], function(angular, sample, service1, service2){
	console.log('Main app...');

	var main = angular.module('tutorial4', [
		'tutorial4.sample'
	]);

	return main;
});

require(['angular', 'main'], function(angular, main){
	var $html = angular.element(document.getElementsByTagName('html')[0]);
	angular.element().ready(function() {
		angular.bootstrap(document.body, [main.name]);
		console.log('bootstraped...', angular);
	});
});
