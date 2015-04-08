var templates = require('../templates');

var _refreshId = _.uniqueId('refresh_');
var _layoutOptsId = _.uniqueId('layout_opts_');
var _formId = _.uniqueId('form_');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        
        // Update when graph is ready
        this.listenTo(Backbone, 'graph_ready', this.onGraphReady);
        
        this.events['click #' + _refreshId] = 'refresh';
    },
    
    events:{
        /*'change select[name=name]': 'onSelectChange',*/
        'change select[name=algorithm]': 'onAlgorithmChange',
        'click #play': 'onPlayClick',
        'change input[name=bgcolor]': 'onBgColorChange'
    },
    
    render: function(){
        var tpl = templates.sidemenu({ refreshId: _refreshId, layoutOptsId : _layoutOptsId, formId : _formId });
        $(this.options.el).append(tpl);
        this.setOptions('concentric');
        
        tpl = templates.shortestpath({});
        $('#algorithms').html(tpl);
    },
    
    tooglevisible: function(){
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
    
    setOptions : function(name){
        var tpl = templates[name]();
        $('#'+_layoutOptsId).html(tpl);
        
        //Init tooltips
        $('[data-toggle="tooltip"]').tooltip();
    },
    
    refresh : function(e){
        App.views.graph.layout(this.serializeForm());
    },
    
    onGraphReady : function(){
        var nodes = arguments[1].nodes || [];
        nodes = _.pluck(nodes, 'id').sort();
        
        if(nodes.length){
            tpl = templates.shortestpath({nodes : nodes});
            $('#algorithms').html(tpl);
        }
    },
    
    onPlayClick : function(e){
       
        var source = $('select[name=source]').val(), target  = $('select[name=target]').val(), algorithm = $('select[name=algorithm]').val();
        
        
        App.views.graph.algorithm(algorithm, {source: source, target: target});
        //if(source !== 'none' && target !== 'none')
            //App.views.graph.dijkstra(source, target);
    },
    
    onAlgorithmChange : function(){
        var algorithm = $('select[name=algorithm]').val();
        //var i = $('select[name=algorithm]')[0].selectedIndex;
        
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
    
    serializeForm : function(){
        var serial = _.object($('#'+_formId).serializeArray().map(function(v) {return [v.name, v.value];} ));
        
        var blacklist = [];
        _.each(serial, function(e,k){
            
            if(e === 'true'){ 
                serial[k] = true;
            }else if(e === 'false'){ 
                serial[k] = false;
            }else if(k !== 'name'){
                var i = parseInt(e);
                if(_.isNaN(i)){ 
                    blacklist.push(k);
                }else{
                    serial[k] = i;
                }
            }
        });
        
        serial = _.omit(serial, blacklist);
        return serial;
    }
    
});