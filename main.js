jQuery = require('jquery');
Backbone = require('backbone');
Backbone.$ = jQuery;

window.Handlebars = require('handlebars');
window._ = require('underscore');

var Atlas = require('./js/models/atlas.js');

require('./js/helpers.js'); // Handelbars helpers
require('bootstrap/dist/js/bootstrap.min.js'); // bootsrrap

var HomeView = require('./js/views/home');
var Progressbar = require('./js/views/progressbar');
var psicquic = require('biojs-rest-psicquic');

var _onSearch = function(){
    
    //Init progress bar
    var progressBar = new Progressbar({el:'#loading'});
    progressBar.render();
    
    psicquic.getInteractionsForIds(arguments[0].split(','));
    
    /*var atlas = new Atlas({query:arguments[0], expanded:arguments[1]});
    atlas.fetch({
        dataType: 'text',
        error: function (errorResponse, a) {
            console.error('Ajax Error, could not fetch interactions from', window.iAtlas.properties.psicquicServer);
        }
    }).done(function(){
        progressBar.update(100);
    });*/
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

