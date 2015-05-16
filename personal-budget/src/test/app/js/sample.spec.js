define(['angular', 'sample', 'angularMock'], function(angular, sample) {
    'use strict;'

	console.log('testing sample instance: '+sample);
	
    describe('[sample module]', function () {
		beforeEach(module('tutorial4.sample'));

		describe('sample controller', function() {
			var sampleController;
			
			beforeEach(inject(function($controller) {
				sampleController = $controller('SampleCtrl');
			}));

	        it('should be loaded', function() {
				expect(sampleController).toBeDefined();
	        });
			
	        it('should have a value', function() {
				expect(sampleController.value).toBeDefined();
	        });
			
		});

    });

});
