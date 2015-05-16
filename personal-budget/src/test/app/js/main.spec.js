define(['angular', 'main', 'angularMock'], function(angular, main) {
    'use strict;'

	console.log('testing main instance: '+main);
	
	// Angular mocks automatically bootstraps the app
	
    describe('[main tests]', function () {		
        it('main should have pass', function() {
            expect(true).toBe(true);
        });
    });

});
