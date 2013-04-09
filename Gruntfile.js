/*
 * grunt-zobei-template
 * https://github.com/Administrator/tcompile
 *
 * Copyright (c) 2013 bubusy
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    zobei_template: {
      default_test: {
        files: {
          'test/test.js': 'test/test.tpl'
        },
      },
    },

  });

  grunt.loadTasks('tasks');


  grunt.registerTask('test', ['zobei_template']);

  grunt.registerTask('default', ['test']);

};
