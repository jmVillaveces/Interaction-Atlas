var Interactors = require('../collections/interactors.js');
var Interactions = require('../collections/interactions.js');

module.exports = Backbone.Model.extend({
    defaults: {
        expanded : false,
        query : ''
    },
    urlRoot: function() {
        return  (iAtlas) ?  iAtlas.properties.psicquicServer + 'query/' : '';
    },
    url: function() {
        
        var url = '', ids = this.attributes.query.split(',').join(' OR ');
        if(! this.attributes.expanded){
            url += 'idA:(' + ids + ') AND idB:(' + ids + ')';
        }else{
            url += 'identifier:(' + ids + ')';
        }
        
        url += '?firstResult=0&maxResults=3000';
        
        return this.urlRoot() + url;
    },
    parse: function(response, xhr) {
        var mitab = require('biojs-io-mitab').parse(response);
        
        var interactors = new Interactors(mitab.nodes);
        var interactions = new Interactions(mitab.links);
        
        return {
            interactors : interactors,
            interactions : interactions,
            taxa : mitab.taxa,
            scores : mitab.scores
        };
    },
    //Override fetch to deal with proxy if defined in properties
    fetch: function(opt) {

        var options = opt || {};
        
        options.dataType = 'text';
        options.error = function (errorResponse, a) {
            console.error('Ajax Error, could not fetch interactions from', window.iAtlas.properties.psicquicServer);
        };
        
        if(iAtlas.properties.proxy){
            var u = this.url();
            this.url = iAtlas.properties.proxy;
            console.log(u);
            options.data = {url:u};
        }
        
        return Backbone.Collection.prototype.fetch.call(this, options);
    }
});