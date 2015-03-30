var templates = require('../templates');

var _formId = _.uniqueId('form_');
var _refreshId = _.uniqueId('refresh_');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        
        // Update tags when model changes
        this.listenTo(Backbone, 'got_data', this.render);
        
        this.events['click #' + _refreshId] = 'refresh';
    },
    
    events:{
        
    },
    
    render: function(){
        var tpl = templates.options({formId:_formId, refreshId: _refreshId, scores: App.model.attributes.scores});
        $(this.options.el).html(tpl);
    },
    
    refresh : function(e){
        var opt = this.serializeForm(), graph = App.views.graph;
        
        if( opt.legend !== graph.legend()){
            graph.legend(opt.legend);
        }
        
        if( opt.trim !== graph.trim()){
            graph.trim(opt.trim).update();
        }
        
        if(opt.score !== graph.score()[0] || opt.scoreAttr !== graph.score()[1]){
            graph.score([opt.score, opt.scoreAttr]);
        }
        
        //if(changed) graph.update();
    },
    
    serializeForm : function(){
        var serial = _.object($('#'+_formId).serializeArray().map(function(v) {return [v.name, v.value];} ));
        
        var blacklist = [];
        _.each(serial, function(e,k){
            
            if(e === 'true'){ 
                serial[k] = true;
            }else if(e === 'false'){ 
                serial[k] = false;
            }
        });
        
        return serial;
    }
});