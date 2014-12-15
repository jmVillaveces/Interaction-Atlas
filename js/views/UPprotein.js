var Sequence = require("biojs-vis-sequence");
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
        
    }
});