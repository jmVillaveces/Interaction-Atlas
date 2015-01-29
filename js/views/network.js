var templates = require('../templates');
var vis = require('../vis/visualization');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        this.data = options.data;
    },

    events:{
        'keyup #search': 'keyAction',
        'click #save' : 'save',
        'click #pathway' : 'pathway'
    },
    
    render: function(){
        var tpl = templates.network();
        $(this.options.el).html(tpl);
        this.network = vis.data(this.data).selector('#network').update();
        //viz.selector('#network').data(this.data).width($(window).width()).height($(window).height()).update();
    },
    
    keyAction: function(e){
        var value = $('#search').val();
        this.network.search(value);
    },
    
    save : function(){
        
        var svg = d3.selectAll('#network');
        var html ='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="'+svg.attr('width')+'" height="'+svg.attr('height')+'">' + 
        svg.node().innerHTML +'</svg>';
            
        var l = document.createElement('a');
            l.download = 'network.svg';
            l.href = 'data:image/svg+xml;base64,' + btoa(html);
            l.click();
    },
    
    pathway : function(){
        Backbone.trigger('pathway');
    },
    
    setLayout : function(l){
        this.network.layout(l).update();
    }
});