var templates = require('../templates');
var Slider = require('bootstrap-slider');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
    },
    
    events:{
        'click .side_handle': 'tooglevisible',
        'change #layout_selector': 'layoutselected',
        'change #matrix_sort': 'sort'
    },
    
    render: function(){
        var tpl = templates.sidemenu(this.options.data);
        $(this.options.el).append(tpl);
        
        $('#radial_opt').hide();
        $('#matrix_opt').hide();
        
        var slider = new Slider('#radial_slider', { min: 0, max: 1, step: 0.01, value: 0.85 });
        slider.on('slide', function(d){
            var val = d.value;
            Backbone.trigger('tension', val);
        });
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
        
        var val = this.$('#layout_selector').val();
        
        if(val === 'matrix'){ 
            $('#matrix_opt').show();
            $('#radial_opt').hide();
        } else if(val === 'radial'){ 
            $('#radial_opt').show();
            $('#matrix_opt').hide();
        }else{
            $('#radial_opt').hide();
            $('#matrix_opt').hide();
        }
        
        
        iAtlas.vent.trigger('layoutchanged', val);
    },
    
    sort : function(e){
        Backbone.trigger('sort', this.$('#matrix_sort').val());
    }
});