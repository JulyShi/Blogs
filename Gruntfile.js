module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
          js: ['js/dist/**/*.js']
        },
        concat: {
          options: {
            separator: ';'
          },
          dist: {
            files: {
              'js/dist/vendor.js': ['js/vendor/jquery.js', 'js/vendor/bootstrap.js','js/vendor/simple-jekyll-search.js'],
              'js/dist/all.js': ['js/backtop.js', 'js/clean-blog.js', 'js/custom.js']
            }
          }
        },
        uglify: {
            main: {
              files: [{
                expand: true,
                src: ['dist/*.js', '!dist/*.min.js'],
                dest: 'js/',
                cwd: 'js/',
                rename: function (dst, src) {
                  // To keep the source js files and make new files as `*.min.js`:
                   return dst + '/' + src.replace('.js', '.min.js');
                }
              }]
            }
        },
        // less: {
        //     expanded: {
        //         options: {
        //             paths: ["css"]
        //         },
        //         files: {
        //             "css/<%= pkg.name %>.css": "less/<%= pkg.name %>.less"
        //         }
        //     },
        //     minified: {
        //         options: {
        //             paths: ["css"],
        //             cleancss: true
        //         },
        //         files: {
        //             "css/<%= pkg.name %>.min.css": "less/<%= pkg.name %>.less"
        //         }
        //     }
        // },
        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['css/<%= pkg.name %>.css', 'css/<%= pkg.name %>.min.css', 'js/<%= pkg.name %>.min.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/<%= pkg.name %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            // less: {
            //     files: ['less/*.less'],
            //     tasks: ['less'],
            //     options: {
            //         spawn: false,
            //     }
            // },
        },
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
  grunt.registerTask('default', ['clean','concat','uglify','usebanner']);

};
