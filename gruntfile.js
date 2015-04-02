module.exports = function(grunt) {
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['gruntfile.js', 'main.js', 'js/**/*.js', 'tests/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        browserify: {
            'dist/js/iAtlas.js': ['main.js']
        },
        handlebars: {
            compile: {
                options: {
                    node: true,
                    namespace: 'Templates',
                    partialsUseNamespace: true,
                    processName: function(filePath) {
                        var file = filePath.replace(/.*\/(\w+)\.hbs/, '$1');
                        return file;
                    }
                },
                files:{
                    'js/templates.js': ['templates/*.hbs']
                }
            }
        },
        stylus: {
            'dist/css/iAtlas.css': ['css/*.styl'], // compile and concat into single file
            options: {
                urlfunc: {
                    name:'embedurl',
                    limit:false
                },
                'include css':true
            }
        },
        clean: ['dist'],
        copy: [
            { expand: true, flatten: true, src: ['img/favicon.ico'], dest: 'dist/' },
            { expand: true, flatten: true, src: ['img/loading.gif'], dest: 'dist/' },
            { expand: true, flatten: true, src: ['img/LOGO-BIO-CMYK_100_en.jpg'], dest: 'dist/' },
            { expand: true, flatten: true, src: ['html/index.html'], dest: 'dist/' },
            { expand: true, flatten: true, src: ['css/fonts/*'], dest: 'dist/fonts/' },
            { expand: true, flatten: true, src: ['js/lib/*.js'], dest: 'dist/js/' },
            { expand: true, flatten: true, src: ['css/*.css'], dest: 'dist/css/' }
        ],
        simplemocha: {
            options: {
                globals: ['expect', '_', '$', 'jQuery', 'Backbone'],
                timeout: 3000,
                ignoreLeaks: true,
                reporter: 'tap'
            },
            all: { src: ['tests/**/*.js'] }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/js/iAtlas.min.js': ['dist/js/iAtlas.js']
                }
            }
        }
        /*watch: {
            handlebars:{
                files: ['<%= handlebars.compile.files %>'],
                tasks: ['handlebars', 'browserify']
            },
            hinting:{
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            },
            browserify:{
                files: ['<%= jshint.files %>'],
                tasks: ['browserify']
            },
            stylus:{
                files: ['css/*.styl'],
                tasks: ['stylus']
            }
        }*/
    });
    
    //Tasks
    grunt.registerTask('dist', ['clean', 'jshint', 'simplemocha', 'handlebars', 'copy', 'browserify', 'stylus', 'uglify']); //Generates dist folder
    
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
};
