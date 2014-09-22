module.exports = function(grunt) {
    
    //Load Tasks
    //grunt.loadTasks('tasks');
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['gruntfile.js', 'tasks/*.js', 'main.js', 'js/**/*.js'],
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
                urlfunc: 'embedurl'
            }
        },
        watch: {
            handlebars:{
                files: ['<%= handlebars.compile.files %>'],
                tasks: ['handlebars']
            },
            hinting:{
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            },
            browserify:{
                files: ['<%= jshint.files %>', 'dist/main.js'],
                tasks: ['browserify']
            }
        }
    });

    
    
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-stylus');
};
