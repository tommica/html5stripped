/* global module */
module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    clean: {
      release: ['release']
    },

    compass: {
      watch: {
        options: {
          config: 'config.rb',
          outputStyle: 'expanded',
          force: true,
          debugInfo: true
        }
      },

      release: {
        options: {
          config: 'config.rb',
          outputStyle: 'compressed',
          force: true
        }
      }
    },

    copy: {
      release: {
        files: [
          {expand: true, cwd: './', src: ['*.png', '*.html', '*.xml', '*.ico', '*.txt', '.htaccess'], dest: 'release/', filter: 'isFile'}, // Root files
          {expand: true, cwd: './', src: ['images/**'], dest: 'release/', filter: 'isFile'}, // Images
          {expand: true, cwd: './', src: ['scripts/**'], dest: 'release/', filter: 'isFile'}, // Scripts
          {expand: true, cwd: './', src: ['css/**'], dest: 'release/', filter: 'isFile'}, // CSS
        ]
      }
    },

    imagemin: {
      release: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'images',
          src: '*.{png,jpg,jpeg}',
          dest: 'release/images'
        }]
      }
    },
    
    mkdir: {
      release: {
        options: {
          create: ['release']
        }
      }
    },

    watch: {
      css: {
        files: ['sass/**'],
        tasks: ['compass:watch'],
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mkdir');

  // Set Tasks
  grunt.registerTask('default', []);
  grunt.registerTask('wc', ['watch:css']);
  grunt.registerTask('release', ['mkdir:release', 'clean:release', 'compass:release', 'copy:release', 'imagemin:release', 'compass:watch']); 
};