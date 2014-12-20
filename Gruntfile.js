'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    browserSync: {
      bsFiles: {
        src : 'models/**/*.jscad'
      },
      options: {
        server: {
          baseDir: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ['browserSync']);

};
