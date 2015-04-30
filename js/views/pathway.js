var templates = require('../templates');

var _dialId = _.uniqueId('dial_'), _containerId = _.uniqueId('Pathway_');

module.exports = Backbone.View.extend({
    
    initialize : function(options){
        this.options = options;
        $('<div id=' + _containerId + '></div>').appendTo(this.options.el);
        this.setElement('#' + _containerId);
    },
    
    render: function(){
        
        var options = {
            title : 'Pathway Enrichment', 
            icon : 'glyphicon-th-list', 
            dialId : _dialId
        };
        
        var tpl = templates.dialog(options);
        this.$el.html(tpl);
        
        $('#' + _dialId).modal('show');
        
        this.fetch_data();
    },
    
    fetch_data : function(){
        
        var data = App.model.attributes.interactors.map(function(n){
            var attrs = n.attributes;
            return (attrs.uniprot.length) ? attrs.uniprot : attrs.id; 
        });
        
        $.ajax({
            url: "http://www.reactome.org:80/AnalysisService/identifiers/?pageSize=20&page=1&sortBy=ENTITIES_PVALUE&order=ASC&resource=TOTAL",
            type:'text/plain',
            method: 'POST',
            data: data.join('\n'),
            contentType: 'text/plain',
            success: function(data){
                var tpl = templates.pathway(data);
                $('#' + _dialId + ' .modal-body').html(tpl);
            },
            error: function(errMsg){
                $('#' + _dialId + ' .modal-body').html('<p class="alert alert-danger col-md-6 col-md-offset-2" role="alert">There was an error fetching pathway enrichment from Reactome. Please try again later.</p>');
            }
        });
    }
});