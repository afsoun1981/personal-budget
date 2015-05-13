define(['angular', 'main'], function(angular, main) {
    'use strict;'

	console.log('testing instance: '+main);
	
	// Initialize main app
	angular.bootstrap(document.body, [main.name]);
	
    describe('[main tests]', function () {
        it('main should have pass', function() {
            expect(true).toBe(true);
        });
    });

});
