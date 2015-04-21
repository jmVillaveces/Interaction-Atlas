var templates = require('../templates');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        
        // Update when graph is ready
        this.listenTo(Backbone, 'graph_ready', this.onGraphReady);
    },
    
    events:{
        /*'change select[name=name]': 'onSelectChange',*/
        'change select[name=algorithm]': 'onAlgorithmChange',
        'click #play': 'onPlayClick',
        'change input[name=bgcolor]': 'onBgColorChange',
        'change input[name=hcolor]': 'onHColorChange',
        'change .graph_attribute': 'onAttrChange',
        'change select[name=vizopt]': 'onVizOptChange',
    },
    
    render: function(){
        var tpl = templates.sidemenu({});
        $(this.options.el).append(tpl);
    },
    
    togglevisible: function(){
        var hidden = $('.side_container');
        if (hidden.hasClass('visible')){
            hidden.animate({'right':'-342px'}, 'slow').removeClass('visible');
        } else {
            hidden.animate({'right':'0px'}, 'slow').addClass('visible');
        }
    },
    
    onSelectChange : function(e){
        var layoutName = $('select[name=name]').val().toLowerCase();
        this.setOptions(layoutName);
    },
    
    onGraphReady : function(){
        var nodes = arguments[1].nodes || [];
        nodes = _.pluck(nodes, 'id').sort();
        
        if(nodes.length){
            tpl = templates.shortestpath({nodes : nodes});
            $('#algorithms').html(tpl);
        }
        
        //Init minicolors
        $('.minicolors-input').minicolors({ theme:'bootstrap'});
    },
    
    onPlayClick : function(e){
        var source = $('select[name=source]').val(), target  = $('select[name=target]').val(), algorithm = $('select[name=algorithm]').val();
        App.views.graph.algorithm(algorithm, {source: source, target: target});
    },
    
    onAlgorithmChange : function(){
        var algorithm = $('select[name=algorithm]').val();
        
        $('#algoquote footer').hide();
        $('#algoquote footer[name='+algorithm+']').show();
        
        if(algorithm === 'kruskal' || algorithm === 'kargerStein'){
            $('#source').hide();
            $('#target').hide();
        }else if (algorithm === 'breadthfirst'){
            $('#source').show();
            $('#target').hide();
        }else{
            $('#source').show();
            $('#target').show();
        }
    },
    
    onBgColorChange:function(e){
        App.views.graph.bgColor($(e.target).val());
    },
    
    onHColorChange:function(e){
        App.views.graph.hColor($(e.target).val());
    },
    
    onAttrChange : function(e){
        
        var eles = null;
        if($('select[name=vizopt]').val() === 'edge'){
            eles = (App.views.graph.cy.edges(':selected').length) ? App.views.graph.cy.edges(':selected') : App.views.graph.cy.edges();
        }else{
            eles = (App.views.graph.cy.nodes(':selected').length) ? App.views.graph.cy.nodes(':selected') : App.views.graph.cy.nodes();
        }
        
        eles.css($(e.target).attr('name'), $(e.target).val());
    },
    
    onVizOptChange : function(e){
        $('.vizopt').hide();
        $('#' + $(e.target).val()).show();
    }
    
});