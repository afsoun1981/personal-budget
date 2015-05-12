define(['main'], function(main) {
    'use strict;'

	console.log('testing instance: '+main);
	
    describe('[main tests]', function () {
        it('main should have pass', function() {
            expect(true).toBe(true);
        });
    });

});
