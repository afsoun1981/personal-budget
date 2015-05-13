/** This file is for debugging purposes. **/
require.config( {
	baseUrl: 'js',
	paths: {
        angular: '../../lib/angular/angular',
        'ui.bootstrap': '../../lib/angular-bootstrap/ui-bootstrap-tpls.min'
    },
	shim: {
        angular: {
            exports: 'angular'
        },
        'ui.bootstrap': {
            deps: ['angular']
        }
    }
});

require(['main']);