var Sequence = require('biojs-vis-sequence');
var Structure = require('bio-pv');
var templates = require('../templates');

var colors = d3.scale.category20c();
module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
    },
    
    render: function(){
        var tpl = templates.UPprotein(this.options.data);
        $(this.options.el).html(tpl);
        
        //Init sequence
        var sequence = new Sequence({
            sequence : this.options.data.sequence,
            target : 'sequence',
            format : 'FASTA',
            columns: { size: 100, spacedEach: 10 },
            formatOptions : {
                title:false,
                footer:false
            },
            id : 'someid'
        });
        
        var features = _.groupBy(this.options.data.features, function(f){ return f.type; });
        
        _.each(_.keys(features), function(k, i){
            sequence.addAnnotation({
                name : k,
                color : colors(i),
                regions : features[k]
            });
        });
        
        //Init structure
        /*var structure = Structure.Viewer(
            document.getElementById('structure'), 
            { 
                quality : 'high', 
                width: 500, 
                height : 500,
                antialias : true, 
                outline : false,
                background : 'white',
                slabMode : 'auto'
            });
        
        
        $.ajax({ 
            url : 'http://cdn.rawgit.com/biasmv/pv/master/pdbs/1ake.pdb',
            success : function(data) {
                var str = io.pdb(data);
                structure.clear();
                
                structure.cartoon('structure', str, { 
                    color : color.ssSuccession(), showRelated : '1', 
                });
                structure.autoZoom();
            }
        });*/
    }
});