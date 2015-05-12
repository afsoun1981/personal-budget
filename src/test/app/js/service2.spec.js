define(['service2'], function(service2) {
    'use strict;'

	console.log('testing instance: '+service2);

    describe('[service2 tests]', function () {
        it('service2 should have pass', function() {
            expect(true).toBe(true);
        });
    });

});
