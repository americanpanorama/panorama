import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import source from 'vinyl-source-stream';

import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';

const $ = gulpLoadPlugins();

const examplesSrc = './examples';
const examplesBuild = './examples/build';

const logTime = fileName => {
	const name = $.util.colors.cyan(fileName);
	return ms => {
		const time = ms < 1000
			? $.util.colors.magenta(ms + ' ms')
			: $.util.colors.magenta(ms / 1000 + ' s');
		$.util.log(`Browserified ${ name } in ${ time }`);
	};
};

const bundleExample = (b, fileName) => {
	return b.bundle()
	.pipe(source(fileName))
	.pipe(gulp.dest('./examples/build'));
};

const watchExample = (b, fileName) => {
	const w = watchify(b).on('time', logTime(fileName));
	const bundle = () => bundleExample(w, fileName);
	w.on('update', bundle);
	return bundle();
};

const simpleBundler = browserify(examplesSrc + '/index.jsx', watchify.args)
	.external('react')
	.external('@panorama/toolkit')
	.transform(babelify);

gulp.task('examples:deps', () => {
	const bundler = browserify()
		.require('react')
	return bundleExample(bundler, 'dependencies.js');
});

gulp.task('examples:lib', () => {

	// 
	// TODO: TUESDAY
	// almost there. but @panorama/toolkit is not getting built into lib.js properly;
	// logging out imported Panorama shows an object with Legend and Punchcard objects, but they're undefined.
	// how does ./examples/build/lib.js even get built?
	// where is it pulling from?
	// i'm guessing the following .require('./', { expose: '@panorama/toolkit' })
	// follows the dependency chain from the root to put together @panorama/toolkit,
	// (in english: require ./ and below, and expose as @panorama/toolkit)
	// and it should just be pulling from ./src/main.js.
	// not sure...
	//

	/*
	const bundler = browserify()
		.external('react')
		.require('./', { expose: '@panorama/toolkit' })
	return bundleExample(bundler, 'lib.js');
	*/

	const bundler = browserify()
		.external('react')
		.require('./src/main.js', { expose: '@panorama/toolkit' })
	return bundleExample(bundler, 'lib.js');
});

gulp.task('examples:server', () => gulp
	.src('./examples')
	.pipe($.webserver({
		port: 8888,
		fallback: 'index.htm'
	}))
);

gulp.task('examples:app', () => bundleExample(simpleBundler, 'index.js'));

gulp.task('watch:examples:lib', ['examples:deps'], () => {
	return gulp.watch('./lib/**', ['examples:lib']);
});

gulp.task('watch:examples:app', ['examples:deps', 'examples:lib'], () => {
	return watchExample(simpleBundler, 'index.js');
});

gulp.task('watch:examples', [
	'examples:server',
	'watch:examples:lib',
	'watch:examples:app'
]);

gulp.task('default', ['examples:deps', 'examples:lib', 'examples:app']);