var Interactors = require('../collections/interactors.js');
var Interactions = require('../collections/interactions.js');

module.exports = Backbone.Model.extend({
    defaults: {
        expanded : false,
        query : '',
        interactors: new Interactors(),
        interactions: new Interactions(),
        taxa : [],
        scores : []
    },
    urlRoot: function() {
        return  (iAtlas) ?  iAtlas.properties.psicquicServer + 'query/' : '';
    },
    url: function() {
        
        var url = '', ids = this.attributes.query.split(',').join(' ');
        if(! this.attributes.expanded){
            url += 'id:(' + ids + ') and id:(' + ids + ')';
        }else{
            url += 'identifier:(' + ids + ')';
        }
        
        url += '?firstResult=0&maxResults=3000';
        
        return this.urlRoot() + url;
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
        
        var interactors = new Interactors(mitab.nodes);
        var interactions = new Interactions(mitab.links);
        var taxa = mitab.taxa;
        
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
        
        return {
            interactors : interactors,
            interactions : interactions,
            taxa : taxa,
            scores : mitab.scores
        };
    },
    //Override fetch to deal with proxy if defined in properties
    fetch: function(opt) {
    
        var options = opt || {};
        
        options.dataType = 'text';
        
        if(iAtlas.properties.proxy){
            var u = this.url();
            this.url = iAtlas.properties.proxy;
            options.data = {url:u};
        }
        
        return Backbone.Model.prototype.fetch.call(this, options);
    }
});