/*
 * grunt-cmv-git-subtree
 * https://github.com/liaodrake/grunt-cmv-git-subtree
 *
 * Copyright (c) 2014 Christopher Vachon
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    git_subtree_add: {
			testsubtree: {
				options: {
					source: "https://github.com/liaodrake/subtree-for-grunt-subtree-testing.git",
					branch: "master",
					target: "test-tree"
				}
			}
    },
		git_subtree_pull: {
			testsubtree: {
				options: {
					source: "https://github.com/liaodrake/subtree-for-grunt-subtree-testing.git",
					branch: "master",
					target: "test-tree"
				}
			}
		},
		git_subtree_push: {
			testsubtree: {
				options: {
					source: "https://github.com/liaodrake/subtree-for-grunt-subtree-testing.git",
					branch: "master",
					target: "test-tree"
				}
			}
		}

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask("addsubtree",["git_subtree_add:testsubtree"]);
	grunt.registerTask("pullsubtree",["git_subtree_pull:testsubtree"]);
	grunt.registerTask("pushsubtree",["git_subtree_push:testsubtree"]);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
