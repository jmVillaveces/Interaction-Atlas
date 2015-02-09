var Interactors = require('../collections/interactors.js');
var Interactions = require('../collections/interactions.js');

var data = {
    query : '',
    interactors: new Interactors(),
    interactions: new Interactions(),
    taxa : [],
    scores : []
};

module.exports = Backbone.Model.extend({
    defaults: {
        query : '',
        interactors: new Interactors(),
        interactions: new Interactions(),
        taxa : [],
        scores : []
    },
    urlRoot: function() {
        return  (iAtlas) ?  iAtlas.properties.psicquicServer + 'interactor/' : '';
    },
    url: function() {
        
        var ids = this.attributes.query.split(',').join(' OR ');
        
        return this.urlRoot() + ids + '?firstResult=0&maxResults=3000';
    },
    parse: function(response, xhr) {
        
        var mitab = require('biojs-io-mitab').parse(response);
        
        // Add in query attr for nodes in query
        var ids = this.attributes.query.replace(/\s+/g, '').split(',');
        _.each(ids, function(id){
            var obj = _.find(mitab.nodes, function(n){
                return n.id === id;
            });
            if(obj !== undefined) obj.inQuery = true;
        });
        
        data.interactors.add(mitab.nodes);
        data.interactions.add(mitab.links);
        data.scores = _.filter(mitab.scores, function(n){ return !_.findWhere(data.scores, n);});
        
        var taxa = _.filter(mitab.taxa, function(n){ return !_.find(data.taxa, function(t){ return t.uid === n; });});
        if(taxa.length > 0){
            $.ajax({
                type: 'GET',
                url: 'http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?retmode=json&db=taxonomy&id='+taxa.join(','),
                async: false,
                success : function(data) {
                    var results = data.result || {};
                    taxa = _.map(taxa, function(t){
                        return results[t] || { scientificname: t, commonname: t, taxid: t };
                    });
                }
            });
            
            data.taxa = data.taxa.concat(taxa);
        }

        return {
            interactors : data.interactors,
            interactions : data.interactions,
            taxa : data.taxa,
            scores : data.scores
        };
    },
    //Override fetch to deal with proxy if defined in properties
    fetch: function(opt) {
    
        var options = opt || {};
        
        options.dataType = 'text';
        
        if(iAtlas.properties.proxy) this.url = iAtlas.properties.proxy+ this.url();
        
        return Backbone.Model.prototype.fetch.call(this, options);
    }
});