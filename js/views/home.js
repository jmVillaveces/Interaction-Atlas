var templates = require('../templates');
var $ = window.jQuery;

module.exports = Backbone.View.extend({
    
    initialize: function(){
        this.render();
    },

    render: function(){
        var tpl = templates.home({"title":"bar", body:'body'});
        $('body').html(tpl);
    }
});