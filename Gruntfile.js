'use strict';

function gruntConfiguration (grunt) {

    /* Set grunt configuration */
    grunt.initConfig({
      concat: {
        options: {
          separator: ';'
        },
        dist: {
          src: ['js/vendor/jquery.js', 'slick/slick.min.js', 'js/foundation.min.js', 'js/app.js'],
          dest: 'dist/built.js'
        }
      },
      uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'dist/built.min.js': ['dist/built.js']
          }
        }
      },
      watch: {
          scripts: {
            files: 'js/app.js',
            tasks: ['build']
          }
        }
    });


    /* Grunt packages */
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    /* Grunt Tasks */
    grunt.registerTask('build', ['concat', 'uglify']);
}

module.exports = gruntConfiguration;
