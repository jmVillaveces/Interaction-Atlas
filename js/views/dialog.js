var templates = require('../templates');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
    },
    
    render: function(){
        var tpl = templates.dialog({el: this.options.data, taxa: this.options.taxa});
        $(this.options.el).html(tpl);
        
        $('#myModal').modal('show');
    }
});