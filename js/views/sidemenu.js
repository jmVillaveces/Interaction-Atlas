var templates = require('../templates');
var ASetter = require('./attributeSetter');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        
        // Update when graph is ready
        this.listenTo(Backbone, 'graph_ready', this.onGraphReady);
        
        this.attrSetter = new ASetter({el:'#attr_dialog'});
    },
    
    events:{
        'change select[name=algorithm]': 'onAlgorithmChange',
        'click #play': 'onPlayClick',
        'change input[name=bgcolor]': 'onBgColorChange',
        'change input[name=hcolor]': 'onHColorChange',
        'change .graph_attribute': 'onAttrChange',
        'change select[name=vizopt]': 'onVizOptChange',
        'click #layout button' : 'onButtClick'
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
        
        
        //Update label content properties
        var strOpt = ''; 
        _.each(App.model.attributes.nodeAttributes, function(prop){
            strOpt += '<option value="'+prop+'">'+prop+'</option>';
        });
        $('select[name=content]').html(strOpt);
        
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
    
    getElements : function(){
        var eles = null;
        if($('select[name=vizopt]').val() === 'edge'){
            eles = (App.views.graph.cy.edges(':selected').length) ? App.views.graph.cy.edges(':selected') : App.views.graph.cy.edges();
        }else{
            eles = (App.views.graph.cy.nodes(':selected').length) ? App.views.graph.cy.nodes(':selected') : App.views.graph.cy.nodes();
        }
        
        return eles;
    },
    
    onAttrChange : function(e){
        var attr = $(e.target).attr('name'), val = $(e.target).val();
        
        if(attr !== 'content'){
            this.getElements().css(attr, val);
        }else{
            var elements = this.getElements();
            App.views.graph.cy.batch(function(){
                elements.filter('[' + val + ']').forEach(function(ele){
                    ele.css(attr, ele.data(val));
                });
            });
        }
    },
    
    onVizOptChange : function(e){
        $('.vizopt').hide();
        $('#' + $(e.target).val()).show();
    },
    
    onButtClick : function(e){
        var parent = $(e.currentTarget).parent().parent();
        var control = parent.find('.form-control');
        
        this.attrSetter.render({
            elements : this.getElements(),
            attributeName : parent.find('label').text(),
            control : parent.find('.form-control'),
            properties : ($('select[name=vizopt]').val() === 'edge') ? App.model.attributes.edgeAttributes : App.model.attributes.nodeAttributes,
            group : ($('select[name=vizopt]').val() === 'edge') ? 'edge' : 'node'
        });
    }
});