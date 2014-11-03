module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Sets main project directories
    config: {
      src: 'src/assets/',
      dist: 'web/'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      compass: {
        files: ['<%= config.src %>/scss/**/*.scss'],
        tasks: ['compass:dist']
      },
      concat: {
        files: ['<%= config.src %>/js/*.js'],
        tasks: ['concat:dist']
      }
    },

    // Compiles SCSS to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= config.src %>/scss/',
        cssDir: '<%= config.dist %>/css',
        imagesDir: '<%= config.dist %>/images',
        javascriptsDir: '<%= config.dist %>/js',
        fontsDir: '<%= config.dist %>/fonts',
        httpImagesPath: '<%= config.dist %>/img',
        httpFontsPath: '<%= config.dist %>/fonts',
        assetCacheBuster: false,
        outputStyle: 'expanded',
        noLineComments: true
      },
      dist: {
        options: {
          cssDir: '<%= config.dist %>/css'
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
        src: ['<%= config.src %>/js/*.js'],
        dest: '<%= config.dist %>/js/coffee-app.js',
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', [
    'compass:dist',
    'concat:dist'
  ]);

};
