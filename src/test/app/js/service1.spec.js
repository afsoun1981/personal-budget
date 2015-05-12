define(['service1'], function(service1) {
    'use strict;'

	console.log('testing instance: '+service1);

    describe('[service1 tests]', function () {
        it('service1 should have pass', function() {
            expect(true).toBe(true);
        });
    });

});
