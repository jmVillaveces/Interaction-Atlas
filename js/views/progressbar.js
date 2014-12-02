var templates = require('../templates');
var $ = jQuery;

module.exports = Backbone.View.extend({
    
    initialize: function(options){
       this.options = options;
    },

    render: function(){
        var tpl = templates.progressbar();
        $(this.options.el).html(tpl);
    },
    
    update : function(data){
        $('[role="progressbar"]').css('width',data+'%');
    }
});