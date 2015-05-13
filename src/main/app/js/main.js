define('main', ['angular', 'service1', 'service2'], function(angular){
	console.log('Main app...');

	var main = angular.module('tutorial4', []);

	return main;
});

require(['angular', 'main'], function(angular, main){
	angular.bootstrap(document.body, [main.name]);
	console.log('bootstraped...', angular);
	console.log(main);
});
