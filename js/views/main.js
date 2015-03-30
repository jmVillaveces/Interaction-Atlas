var templates = require('../templates');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
    },
    
    render: function(){
        var tpl = templates.main(this.options);    
        $(this.options.el).html(tpl);
    }
});