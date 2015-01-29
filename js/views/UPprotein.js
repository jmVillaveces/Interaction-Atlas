var Sequence = require('biojs-vis-sequence');
var Structure = require('bio-pv');
var templates = require('../templates');

var d3 = require('d3');

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
            columns: { size: 50, spacedEach: 5 },
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