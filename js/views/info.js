var templates = require('../templates');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
    },
    
    render: function(){
        var tpl = templates.info();
        //$(this.options.el).html(tpl).modal('show');
        
        //$('#myModal').modal(options)
    }
});