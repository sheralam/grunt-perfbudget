/*
 * grunt-perfbudget
 * https://github.com/tkadlec/grunt-perfbudget
 *
 * Copyright (c) 2014 Tim Kadlec
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
    perfbudget: {
      cdn_ifm_com: {
        options: {
          url: 'http://cdn.intrafish.com',
          key: 'A.3927563394357a3ec6f5143930b65ed4',
          budget: {
            SpeedIndex: '3500'
          }
        }
      },
      www_ifm_com: {
        options: {
          url: 'http://www.intrafish.com',
          key: 'A.3927563394357a3ec6f5143930b65ed4',
          budget: {
            SpeedIndex: '3500'
          }
        }
      }
    },

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
  grunt.registerTask('test', ['clean', 'perfbudget']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
