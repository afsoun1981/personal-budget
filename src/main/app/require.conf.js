require.config( {
	baseUrl: 'js',
	paths: {
        angular: '../../lib/angular/angular.min'
    },
	shim: {
		angular: {
			exports: 'angular'
		}

	}
});

require(['main']);