var Interactors = require('../collections/interactors.js');
var Interactions = require('../collections/interactions.js');

var _edgeAttributes = ['detMethods', 'intTypes', 'sourceDbs'], _maxResults = 10000;

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
        nodeAttributes : ['id', 'degree', 'community', 'geneName', 'taxonomy', 'uniprot'],
        edgeAttributes : ['detMethods', 'intTypes', 'sourceDbs']
    },
    
    url: function() {
         
        var query = (this.attributes.ids.length) ? this.attributes.ids.join(' OR ') : this.attributes.query;
         
        query = (this.attributes.orgs.length) ? 'id:(' + query + ') AND species:(' + this.attributes.orgs.join(' OR ') + ')' : query;
        query += '?firstResult=0&maxResults='+_maxResults;
        
        var url = (this.attributes.proxy) ? this.attributes.proxy + this.attributes.server + query : this.attributes.server + query;
        
        return url;
    },
    
    parse: function(response, xhr) {
        
        var mitab = require('biojs-io-mitab').parse(response);
        
        var scores = [];
        mitab.links = _.map(mitab.links, function(l){
            _.each(this.attributes.edgeAttributes, function(attr){
                l[attr] = _.map(l[attr], function(e){
                    return e.value;
                }, this).join(', '); 
            });
        
            _.each(l.scores, function(s){
                var name = s.name.replace(/ |-/g,'_');
                var val = (_.isNaN(+s.score)) ? (s.score.length) ? s.score : NaN : +s.score;
                
                if(!_.isNaN(s.score)){
                    l[name] = val;
                    scores.push(name);
                }
            });
            return l;
        }, this);
        
        mitab.nodes = _.map(mitab.nodes, function(n){
            n.taxonomy = n.taxonomy.join(', ');
            n.taxonomy = (_.isNaN(n.taxonomy)) ? n.taxonomy : + n.taxonomy;
            return n;
        });
        
        this.attributes.edgeAttributes = _edgeAttributes.concat(_.uniq(scores));
        this.attributes.interactors.set(mitab.nodes);
        this.attributes.interactions.set(mitab.links);

        return this.attributes;
    },
    
    //Override fetch to deal with proxy if defined in properties
    fetch: function(opt) {
    
        var options = opt || {};
        options.dataType = 'text';
        
        return Backbone.Model.prototype.fetch.call(this, options);
    }
});