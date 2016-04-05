/*
 * grunt-bumpup
 * https://github.com/Darsain/grunt-bumpup
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/MIT
 */
'use strict';

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('test/v.json'),
		jshint: {
			options: {
				jshintrc: '.jshintrc',
			},
			all: [
				'Gruntfile.js',
				'tasks/*.js',
			],
		},

		// Configuration to be run.
		bumpup: {
			options: {
				dateformat: 'YYYY-MM-DD HH:mm',
				normalize: true,
				updateProps: {
					pkg: 'test/v.json'
				}
			},
			setters: {
				timestamp: function () {
					return +new Date();
				}
			},
			files: ['test/v.json', 'test/d.json', 'test/vd.json'],
		}
	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Registering the testing task.
	grunt.registerTask('test', function (type, build) {
		var bumpParts = ['bumpup'];
		if (type) { bumpParts.push(type); }
		if (build) { bumpParts.push(build); }
		grunt.task.run('logver');
		grunt.task.run(bumpParts.join(':'));
		grunt.task.run('logver');
	});

	// Registering the testing task.
	grunt.registerTask('logver', function () {
		grunt.log.writeln('version: ' + grunt.config.process('<%= pkg.version %>'));
	});

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'bumpup']);
};