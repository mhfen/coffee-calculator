module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Sets main project directories
    config: {
      src: 'src/',
      dist: '.'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      compass: {
        files: ['<%= config.src %>/assets/scss/**/*.scss'],
        tasks: ['compass:dev']
      },
      concat: {
        files: ['<%= config.src %>/assets/js/*.js'],
        tasks: ['concat:dist']
      },
      copy: {
        files: ['<%= config.src %>/assets/**'],
        tasks: ['copy:assets']
      }
    },

    // Compiles SCSS to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= config.src %>/assets/scss/',
        cssDir: '<%= config.dist %>/assets/styles',
        assetCacheBuster: false,
        noLineComments: true,
      },
      dev: {
        options: {
          outputStyle: 'expanded'
        }
      },
      prod: {
        options: {
          outputStyle: 'compressed'
        }
      }
    },

    // Concatenates files
    concat: {
      options: {
        banner: '/*! Calculator App Build - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %> */' + grunt.util.linefeed + grunt.util.linefeed,
        separator: grunt.util.linefeed + grunt.util.linefeed
      },
      dist: {
        src: ['<%= config.src %>/assets/js/*.js'],
        dest: '<%= config.dist %>/assets/js/coffee-app.js',
      }
    },

    copy: {
      assets : {
          expand: true,
          cwd: '<%= config.src %>/assets',
          src: ['media/**'],
          dest: '<%= config.dist %>/assets',
          filter: 'isFile'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', [
    'compass:dev',
    'concat:dist',
    'copy:assets'
  ]);

};
