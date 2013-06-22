/*global module:false require*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    files: {
      grunt: ['gruntfile.js'],
      js:    ['js/custom/*.js'],
      scss:    ['scss/style.scss'],
      img:   ['images']
    },

    smushit: {
      path: { src: '<%= files.img %>' } // recursively replace minified images
    },

    concat: {
      js: {
        src: ['<%= files.js %>'],
        dest: 'js/site.concat.js'
      }
    },

    uglify: {
      dist: {
        src: ['js/site.concat.js'],
        dest: 'js/site.min.js'
      }
    },

    sass: {
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },

    watch: {
      files: ['<%= files.grunt %>', '<%= files.js %>', '<%= files.scss %>'],
      tasks: ['default']
    }
  });


  // load plugins installed from npm (see package.json)
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-smushit');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', [
                      'concat:js',
                      'uglify',
                      'sass'
                    ]);

  /**
   * Minify task
   *
   * Run the default task then losslessly minify images with Yahoo!'s Smush-It
   */
  grunt.registerTask('minify', ['default', 'smushit']);
};
