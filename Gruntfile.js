'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      js: {
        files: ['js-src/{,**/}*.js'],
        tasks: ['jshint', 'uglify:dist']
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['js-src/{,**/}*.js']
    },

    uglify: {
      dist: {
        options: {
          mangle: true,
          compress: true
        },
        files: [{
          expand: true,
          cwd: 'js-src',
          src: ['**/*.js'],
          dest: 'js'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('js', [
    'jshint',
    'uglify:dist'
  ]);

  grunt.registerTask('default', 'js');
};
