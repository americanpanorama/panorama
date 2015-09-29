import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import source from 'vinyl-source-stream';

import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';

const $ = gulpLoadPlugins();

/**
 * List of all external runtime dependencies,
 * which will be bundled separately from
 * example application files and @panorama/toolkit.
 * 
 * Note: babelify and sass-css-stream are listed as `dependencies`
 * in `package.json` because they are transforms required
 * to build a project containing @panorama/toolkit.
 * They are not required at runtime, and therefore
 * are not included here.
 */
const dependencies = [
	'react'
];

/**
 * Pretty-print bundle build timings.
 */
const logTime = fileName => {
	const name = $.util.colors.cyan(fileName);
	return ms => {
		const time = ms < 1000
			? $.util.colors.magenta(ms + ' ms')
			: $.util.colors.magenta(ms / 1000 + ' s');
		$.util.log(`Browserified ${ name } in ${ time }`);
	};
};

/**
 * Given a browserify instance, `bundle()`s up files
 * and writes them to the specified `fileName`
 * within ./examples/build.
 */
const bundleExamples = (b, fileName) => {
	return b.bundle()
	.pipe(source(fileName))
	.pipe(gulp.dest('./examples/build'));
};

/**
 * Wraps a browserify instance in watchify,
 * which logs build step timings
 * and rebuilds ./examples/build when
 * files within ./examples change.
 */
const watchExample = (b, fileName) => {
	const w = watchify(b).on('time', logTime(fileName));
	const bundle = () => bundleExamples(w, fileName);
	w.on('update', bundle);
	return bundle();
};

/**
 * browserify instance to package files in ./examples,
 * specifying dependencies and @panorama/toolkit as
 * external dependencies (and excluding from this build).
 */
const exampleBundler = browserify('./examples' + '/index.jsx', watchify.args)
	.external(dependencies)
	.external('@panorama/toolkit')
	.transform(babelify);

/**
 * Bundle all external dependencies into one file,
 * to allow end users take advantage of browser caching.
 */
gulp.task('examples:deps', () => {
	const bundler = browserify()
		.require(dependencies)
	return bundleExamples(bundler, 'dependencies.js');
});

/**
 * Bundle the files in ./src into a lib bundle that can be included
 * in other projects, via `import * from @panorama/toolkit`.
 * Include React as an external (not bundled) dependency.
 */
gulp.task('examples:lib', () => {
	const bundler = browserify()
		.external(dependencies)
		.require('./src/main.js', { expose: '@panorama/toolkit' })
	return bundleExamples(bundler, 'lib.js');
});

/**
 * Run a webserver for local testing,
 * pointed at ./examples.
 */
gulp.task('examples:server', () => gulp
	.src('./examples')
	.pipe($.webserver({
		port: 8888,
		fallback: 'index.htm'
	}))
);

/**
 * Rebuild examples without rebuilding
 * @panorama/toolkit or dependencies.
 */
gulp.task('examples:app', () => {
	bundleExamples(exampleBundler, 'index.js')
});

/**
 * Watch for changes in ./lib; on change,
 * rebuild lib and dependencies in examples.
 */
gulp.task('watch:examples:lib', ['examples:deps'], () => {
	return gulp.watch('./lib/**', ['examples:lib']);
});

/**
 * Watch for changes in ./examples; on change,
 * rebuild everything within ./examples.
 */
gulp.task('watch:examples:app', ['examples:deps', 'examples:lib'], () => {
	return watchExample(exampleBundler, 'index.js');
});

/**
 * Run a local webserver and watch
 * for changes in ./lib and ./examples.
 */
gulp.task('watch:examples', [
	'examples:server',
	'watch:examples:lib',
	'watch:examples:app'
]);

/**
 * Build everything in ./examples:
 * example application files, lib, and dependencies.
 * Does not launch a watcher or webserver.
 */
gulp.task('default', ['examples:deps', 'examples:lib', 'examples:app']);
