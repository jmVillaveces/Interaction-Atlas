var templates = require('../templates');
var viz = require('../lib/network.viz.js');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        this.data = options.data;
    },

    events:{
        'keyup #search': 'keyAction'
    },
    
    render: function(){
        var tpl = templates.network();
        $(this.options.el).html(tpl);
        this.network = viz.selector('#network').data(this.data).width($(window).width()).height($(window).height()).update();
    },
    
    keyAction: function(e){
        var value = $('#search').val();
        this.network.search(value);
    }
});