window.jQuery = require('jquery');
window.Backbone = require('backbone');
Backbone.$ = jQuery;

window.Handlebars = require('handlebars');
window._ = require('underscore');


require('./js/helpers.js'); // Handelbars helpers
require('bootstrap/dist/js/bootstrap.min.js'); // bootsrrap

var HomeView = require('./js/views/home');
var Progressbar = require('./js/views/progressbar');
var psicquic = require('biojs-rest-psicquic');

var _onSearch = function(){
    
    var progressBar = new Progressbar({el:'#loading'});
    progressBar.render();
    
    var response = function(err, resp, body){
        if(body){
        
            //var uniprot = require('./js/uniprot').getDataByIds(['P49959','P25454','Q54KD8','O74773'], { format:'tab', columns : 'id,reviewed,genes,keywords' }, function(){console.log(arguments);});
            
            var mitab = require('biojs-io-mitab').parse(body);
            
            var uniprot = require('./js/uniprot'), params = { format:'tab', columns : 'id,reviewed,genes,keywords' };
            
            var size = 100, arr = []; 
            for(var i in mitab.ids){
                if(arr.length === 0 || arr[arr.length-1].length === 250) arr.push([]);
                arr[arr.length-1].push(mitab.ids[i]);
            }
            
            var r = function(){
                console.log(arguments[2]);
            };
            
            for(i in arr){
                uniprot.getDataByIds(arr[i], params, r);
            }
            /*var i = mitab.ids;
            while (mitab.ids.length) {
                var ids = i.splice(0, 250);
                console.log(i.length, mitab.ids.length);
                //uniprot.getDataByIds(ids, params, r);
            }*/
            
            /*uniprot.getDataByIds(mitab.ids.slice(0,5),params, function(err, resp, body){
                console.log(body);
            });*/
        
        }
    };
    
    var params = {firstResult:0, maxResults:3000};
    if(arguments[1] === false){
        psicquic.getInteractionsForIds(arguments[0].split(','), params, response);
    }else{
        psicquic.getExpandedInteractionsForIds(arguments[0].split(','), params, response);
    }
};

//Init Home View
var _homeView = function(err, resp, data){
    var parts = data.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    data = parts.join(".");
    new HomeView({el:'body', count:data, example: window.iAtlas.properties.example}).render();
};

// Init vent and register events
var _events = function(){
    // init properties
    iAtlas.properties = require('./js/properties');

    // init Events
    iAtlas.vent = {};
    _.extend(iAtlas.vent, window.Backbone.Events);
    
    iAtlas.vent.on('search', _onSearch);
};

// Initialize App
var _init = function(){
    
    window.iAtlas = {};
    
    _events();
    
    // query server and render homeview
    psicquic.url(iAtlas.properties.psicquicServer).proxy(iAtlas.properties.proxy).count('*', _homeView);
}();

