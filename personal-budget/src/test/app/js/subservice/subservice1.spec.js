define(['subservice/subservice1'], function(subservice1) {
    'use strict;'

	console.log('testing instance: '+subservice1);
	
    describe('[subservice1 tests]', function () {
        it('subservice1 should have pass', function() {
            expect(true).toBe(true);
        });
    });

});
