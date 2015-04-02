var Sequence = require('biojs-vis-sequence');
var Structure = require('bio-pv');
var templates = require('../templates');
var UPprotein = require('../models/UPprotein');

var _map = {};

var _dialId = _.uniqueId('dial_');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
    },
    
    render: function(node){
        
        var tax = _.map(node.taxonomy, function(t){
            var taxonomy = App.model.attributes.taxa[t];

            var taxStr = taxonomy.scientificname;
            taxStr = (taxonomy.commonname.length) ? taxStr + ' (' + taxonomy.commonname + ')' : taxStr;

            return taxStr;
        });
        
        
        var tpl = templates.dialog({title : node.id, subtitle: tax.join(' - '), dialId : _dialId});    
        $(this.options.el).html(tpl);
        $('#' + _dialId).modal('show');
        
        
        if(!_.has(_map, node.id)){
            
            var self = this;
            var protein = new UPprotein({ id:node.id });
            protein.fetch({
                error : function (errorResponse, a) {
                    console.error(errorResponse, a);
                },
                contentType : 'text/xml',
                dataType : 'xml'
            }).done(function(){
                _map[node.id] = protein.toJSON(); 
                
                self.renderProteinInfo(protein.toJSON());
            }); 
        } else {
            this.renderProteinInfo(_map[node.id]);
        }
    },
    
    renderProteinInfo : function(protein){
        var tpl = templates.UPprotein(protein);
        $('.modal-body').html(tpl);
        
        //Init sequence
        var sequence = new Sequence({
            sequence : protein.sequence,
            target : 'sequence',
            format : 'FASTA',
            columns: { size: 50, spacedEach: 5 },
            formatOptions : {
                title:false,
                footer:false
            },
            id : 'someid'
        });
        
        
        //For performance resons omit
        /*var features = _.groupBy(protein.features, function(f){ return f.type; });
        
        _.each(_.keys(features), function(k, i){
            sequence.addAnnotation({
                name : k,
                color : colors(i),
                regions : features[k]
            });
        });*/
    }
});