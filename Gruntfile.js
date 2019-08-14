module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
          js: ['js/dist/**/*.js'],
          image: ['distImg/']
        },
        concat: {
          options: {
            separator: ';'
          },
          dist: {
            files: {
              'js/dist/vendor.min.js': ['js/vendor/jquery.js', 'js/vendor/bootstrap.js','js/vendor/simple-jekyll-search.js'],
              'js/dist/all.min.js': ['js/backtop.js', 'js/clean-blog.js', 'js/custom.js']
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
        },
        imagemin: {
          dynamic: {
            options: {
              progressive: true,
            },
            files: [
              {
                expand: true,
                cwd: 'img/',
                src: ['**/*.{png,jpg,jpeg,gif,svg,ico}'],
                dest: 'distImg/',
              }
            ]
          }
        },
        copy: {
          image: {
            expand: true,
            cwd: 'distImg',
            src: ['**'],
            dest: 'img/',
          },
        },
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
  grunt.registerTask('default', ['clean:js','concat','uglify','usebanner']);
  grunt.registerTask('dev', ['clean','concat','usebanner']);
  grunt.registerTask('image',['imagemin', 'copy', 'clean:image']);

};
