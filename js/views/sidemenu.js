var templates = require('../templates');
var Slider = require('bootstrap-slider');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
    },
    
    events:{
        'click .side_handle': 'tooglevisible',
        'change #layout_selector': 'layoutselected'
    },
    
    render: function(){
        var tpl = templates.sidemenu(this.options.data);
        $(this.options.el).append(tpl);
        
        
        var mySlider = new Slider('#node_slider');
    },
    
    tooglevisible: function(e){
        var hidden = $('.side_container');
        if (hidden.hasClass('visible')){
            hidden.animate({'right':'-342px'}, 'slow').removeClass('visible');
        } else {
            hidden.animate({'right':'0px'}, 'slow').addClass('visible');
        }
    },
    
    layoutselected : function(e){
        // trigger layout changed
        iAtlas.vent.trigger('layoutchanged', this.$('#layout_selector').val());
    }
});