module.exports = function(grunt) {
    
    //Load Tasks
    grunt.loadTasks('tasks');
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch:{
            precompile:{
                files: ['templates/*.hbs'],
                tasks: ['precompile']
            }
        },
        jshint: {
            files: ['gruntfile.js', 'tasks/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        }
    });

    
    
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    
};
