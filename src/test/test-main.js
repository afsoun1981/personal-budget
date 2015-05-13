var SRC_BASE = 'src/main/app/js';
var SRC_RE_BASE = '../../../../';

var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(SRC_RE_BASE + pathToModule(file));
  }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/' + SRC_BASE,

    paths: {
        jQuery: SRC_RE_BASE + 'frontend/lib/jquery/dist/jquery',
        angular: SRC_RE_BASE + 'frontend/lib/angular/angular',
        angularMock: SRC_RE_BASE + 'frontend/lib/angular-mocks/angular-mocks',
        'ui.bootstrap': SRC_RE_BASE + 'frontend/lib/angular-bootstrap/ui-bootstrap-tpls'
    },

    shim: {
        jQuery: {
            exports: '$'
        },
        angular: {
            exports: 'angular'
        },
        angularMock: {
            deps: ['angular'],
            exports: 'angular.mock'
        },
		'ui.bootstrap': {
            deps: ['angular']
		}
    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
