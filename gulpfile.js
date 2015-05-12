// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var del = require('del');
var sequence = require('run-sequence');
var jshint = require('gulp-jshint');
var compass = require('gulp-compass');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var server = require('gulp-webserver');
var karma = require('karma').server;
var requirejs = require('requirejs');

// Project settings
var config = {
  name: 'main',
  version: '1.0.0',

  src_dir: 'src/main/app/',
  build_dir: 'build/',
  dest_dir: 'dest/',
  tmp_dir: 'build/tmp/',
	
  src_lib_dir: 'frontend/lib/',
  dest_lib_dir: 'dest/lib/',

  src_js_dir: 'src/main/app/js/',
  build_js_dir: 'build/js/',
  dest_js_dir: 'dest/js/',

  src_compass_dir: 'res/sass/',
  src_compass_img_dir: 'res/src_img/',
  dest_compass_dir: 'res/css/',
  dest_compass_img_dir: 'res/img/',

  src_css_dir: 'src/main/app/css/',
  dest_css_dir: 'dest/css/',

  dest_img_dir: 'src/main/app/img/',
  dest_img_dir: 'dest/img/',

  optimized: 'main-dist.js'
};

/** Make tasks **/

gulp.task('clean', function(cb) {
  del([
	  config.dest_dir, 
	  config.build_dir,
	  config.dest_compass_dir,
	  config.dest_compass_img_dir
  ], cb);
});

gulp.task('lib', ['clean'], function() {
	// gulp.src(config.src_lib_dir+'jquery/dist/jquery*.js')
	// 	.pipe(gulp.dest(config.dest_lib_dir+'jquery/dist'));
	//     gulp.src(config.src_lib_dir+'bootstrap/dist/**/*')
	// 	.pipe(gulp.dest(config.dest_lib_dir+'bootstrap/dist'));
	// gulp.src(config.src_lib_dir+'angular/angular*.js')
	// 	.pipe(gulp.dest(config.dest_lib_dir+'angular'));
	gulp.src(config.src_lib_dir+'requirejs/require.js')
		.pipe(gulp.dest(config.dest_lib_dir+'requirejs'));
});

gulp.task('html', ['clean'], function() {
	gulp.src([
        config.src_dir+'/*.html',
        config.src_dir+'/favicon.ico'])
		.pipe(gulp.dest(config.dest_dir));
});

gulp.task('scripts', ['clean'], function(cb) {
  gulp.src(config.src_js_dir+'**/*.js')
      .pipe(gulp.dest(config.build_js_dir))
	  .on('end', cb);
});

gulp.task('optimize', ['clean', 'scripts'], function(cb) {
	var requireConf = {
	  name: 'main', 
	  baseUrl: config.build_js_dir, 
	  out: config.dest_js_dir+'main.js'
  };
  
  requirejs.optimize(requireConf, function(result) {
	console.log('Optimized:');
	console.log(result);
	cb();
  }, function(result) {
	  cb(result);
  });
});

gulp.task('compass', ['clean'], function(cb) {	
    gulp.src(config.src_compass_dir+'**/*.scss')
        .pipe(compass({
			//sourcemap: true,
			
            sass: config.src_compass_dir,
			image: config.src_compass_img_dir,
            css: config.dest_compass_dir,
			generated_images_path: config.dest_compass_img_dir			
        }))
		.on('error', function(error) {
			// Would like to catch the error here 
			console.log(error);
			this.emit('end');
	    })
		.pipe(gulp.dest(config.tmp_dir))
		.on('end', cb);
});

gulp.task('css', ['clean', 'compass'], function() {
	gulp.src([config.dest_compass_dir+'**/*.css', config.src_css_dir+'**/*.css'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest(config.dest_css_dir))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
	.pipe(gulp.dest(config.dest_css_dir));
});

gulp.task('image', ['clean', 'compass'], function() {
	gulp.src([config.dest_compass_img_dir+'**/*'])
		.pipe(gulp.dest(config.dest_img_dir));
});


gulp.task('build', ['clean', 'lib', 'html', 'css', 'image', 'scripts', 'optimize']);

/** Test tasks **/

gulp.task('unittest', function() {
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: false
	});
});

gulp.task('unittestOnce', function() {
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	});
});

gulp.task('test', ['build', 'unittest']);

gulp.task('testOnce', ['build', 'unittestOnce']);

/** Run tasks **/

gulp.task('debug', function() {
	gulp.src([config.src_dir, 'frontend/']).pipe(server({
      port: 8000,
      livereload: true
    }));
});

gulp.task('run', ['build'], function() {
	gulp.src(config.dest_dir).pipe(server({
      port: 8000,
      livereload: true
    }));
});

gulp.task('default', ['run']);
