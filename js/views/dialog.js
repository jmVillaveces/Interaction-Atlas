var templates = require('../templates');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
    },
    
    render: function(render){
        var tpl = templates.dialog(render);    
        $(this.options.el).html(tpl);
        $('#myModal').modal('show');
    }
});