var templates = require('../templates');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
    },
    
    render: function(){
        var tpl = templates.dialog(this.options.data);    
        $(this.options.el).html(tpl);
        $('#myModal').modal('show');
    }
});