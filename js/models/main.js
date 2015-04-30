var Interactors = require('../collections/interactors.js');
var Interactions = require('../collections/interactions.js');

module.exports = Backbone.Model.extend({
    
    initialize: function(){
        this.on('change:ids', function(){ Backbone.trigger('ids_changed', this.attributes.ids); });
    },

    defaults: {
        server:'http://dachstein.biochem.mpg.de:8080/iatlas/webservices/current/search/query/',
        proxy : 'https://cors-anywhere.herokuapp.com/',
        exampleIds: ['P49959','P25454','Q54KD8','O74773','Q8IV36','Q96B01','Q54CS9','P52701','Q9CXE6','Q7T6Y0','Q682D3'],
        exampleQuery:'"physical association" AND identifier:(brca1 OR brca2) AND species:human',
        ids : [],
        query : '',
        orgs : [],
        interactors: new Interactors(),
        interactions: new Interactions(),
        taxa : {},
        scores : [],
        nodeAttributes : ['id', 'degree', 'taxonomy', 'uniprot', 'geneName'],
        edgeAttributes : ['detMethods', 'intTypes', 'sourceDbs']
    },
    
     url: function() {
         
         
        var query = (this.attributes.ids.length) ? this.attributes.ids.join(' OR ') : this.attributes.query;
         
        query = (this.attributes.orgs.length) ? 'id:(' + query + ') AND species:(' + this.attributes.orgs.join(' OR ') + ')' : query;
        query += '?firstResult=0&maxResults=3000';
        
        url = (this.attributes.proxy) ? this.attributes.proxy + this.attributes.server + query : this.attributes.server + query;
        
        return url;
    },
    
    parse: function(response, xhr) {
        
        var mitab = require('biojs-io-mitab').parse(response);
        
        mitab.links = _.map(mitab.links, function(l){
            _.each(this.attributes.edgeAttributes, function(attr){
                l[attr] = _.map(l[attr], function(e){
                    return e.value;
                }, this).join(', '); 
            });
            
            return l;
        }, this);
        
        mitab.nodes = _.map(mitab.nodes, function(n){
            n.taxonomy = n.taxonomy.join(', ');
            n.taxonomy = (_.isNaN(n.taxonomy)) ? n.taxonomy : +n.taxonomy;
            return n;
        });
        
        this.attributes.interactors.set(mitab.nodes);
        this.attributes.interactions.set(mitab.links);
        this.attributes.scores = mitab.scores;

        return this.attributes;
    },
    
    //Override fetch to deal with proxy if defined in properties
    fetch: function(opt) {
    
        var options = opt || {};
        options.dataType = 'text';
        
        return Backbone.Model.prototype.fetch.call(this, options);
    }
});