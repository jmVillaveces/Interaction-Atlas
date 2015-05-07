var Sequence = require('biojs-vis-sequence');
//var Structure = require('bio-pv');
var templates = require('../templates');
var UPprotein = require('../models/UPprotein');

var _map = {};

var _dialId = _.uniqueId('dial_'), _containerId = _.uniqueId('UPcontainer_');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        this.container = $('<div id='+_containerId+'></div>').appendTo(this.options.el);
    },
    
    render: function(node){
        
        var title = (node.uniprot.length) ? node.id +' - (' + node.uniprot +')' : node.id;
        var tpl = templates.dialog({title : title, dialId : _dialId});    
        $(this.container).html(tpl);
        $('#' + _dialId).modal('show');
        
        if(!_.has(_map, node.id)){
            
            var self = this;
            var protein = new UPprotein({ id: (node.uniprot.length) ? node.uniprot : node.id });
            protein.fetch({
                error : function (errorResponse, a) {
                    $('#' + _dialId + ' .modal-body').html('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">No UniProt information available for '+ (node.uniprot.length) ? node.uniprot : node.id+'</span></div>');
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
        $('#' + _dialId+' .modal-body').html(tpl);
        
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