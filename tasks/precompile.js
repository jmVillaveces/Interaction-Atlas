var childProcess = require('child_process');
module.exports = function(grunt) {
    
    grunt.registerTask('precompile', function() {
        
        grunt.util.spawn({
            cmd: 'handlebars',
            args: ['templates/*.hbs', '-f', 'js/templates.js'],
        }, function done(error, result, code) {
            
            if(code == 127) {
                return grunt.warn('The attempt precompile templates failed');
            }
            grunt.log.ok('Templates created');
        });
        
    });

};