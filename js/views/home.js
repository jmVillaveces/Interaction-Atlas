var templates = require('../templates');
var $ = window.jQuery;

module.exports = Backbone.View.extend({
    
    initialize: function(options){
       this.options = options;
    },

    render: function(){
        var tpl = templates.home(this.options);
        $('body').html(tpl);
    }
});