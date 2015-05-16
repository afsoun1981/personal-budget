define('main', [
	'angular',
	'sample',
	'directive/grid',
	'service1',
	'service2',
    'ui.grid',
	'ui.bootstrap'], function(angular, sample, spending, service1, service2, uiGrid, uiBootstrap){
	console.log('Main app...');

	var main = angular.module('tutorial4', [
        'ui.grid',
		'ui.bootstrap',
		'tutorial4.sample',
		'tutorial4.directive.grid'
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
