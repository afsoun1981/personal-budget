/** This file is for debugging purposes. **/
require.config( {
	baseUrl: 'js',
	paths: {
        angular: '../../lib/angular/angular',
        'ui.bootstrap': '../../lib/angular-bootstrap/ui-bootstrap-tpls.min',
        'ui.grid': '../../lib/ui-grid-unstable/ui-grid-unstable.min'
    },
	shim: {
        jQuery: {
            exports: '$'
        },
        angular: {
            exports: 'angular'
        },
        'ui.bootstrap': {
            deps: ['angular']
        },
        'ui.grid': {
            deps: ['angular']
        }
    }
});

require(['main']);