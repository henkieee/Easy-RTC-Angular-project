'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      express: {
        files:  ['server.js'],
        tasks:  [ 'express:server'],
        options: {
          spawn: false // Without this option specified express won't be reloaded
        }
      },
      web: {
        files: ['client/js/**/*.js']
      }
    },
    express: {
      server: {
        options: {
          script: 'server.js'
        }
      }
    }
  });

  grunt.registerTask('default', ['express:server', 'watch']);
};