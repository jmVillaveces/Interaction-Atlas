var Server = require('../models/psicquicServer.js');
module.exports = Backbone.Collection.extend({
    
    model : Server,
    
    url: function() {
        
       
        var url = 'http://www.ebi.ac.uk/Tools/webservices/psicquic/registry/registry?action=ACTIVE&format=txt';
        
        url = (App.model.attributes.proxy) ? App.model.attributes.proxy + url : url;
        
        return url;
    },
    
    parse: function(response, xhr) {
        
        if(_.isArray(response)) return response;
        
        var items = _.filter(response.split('\n'), function(l){ return l.length;});
        items = _.map(items, function(l){ 
            var s = l.split('='); 
            return {name:s[0], url:s[1]}; 
        });
        
        _.each(items, function(i){
            var arr = i.url.split('/');
            arr[arr.length - 1] = 'current/search/query/';
            i.url = arr.join('/');
        });
        
        function compare(a,b) {
          
        }

        items.sort(function(a,b){
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        });
        
        
        return items;
    },
    
    //Override fetch to deal with proxy if defined in properties
    fetch: function(opt) {
    
        var options = opt || {};
        options.dataType = 'text';
        
        return Backbone.Model.prototype.fetch.call(this, options);
    }
});