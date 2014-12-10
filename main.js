jQuery = $ = require('jquery');
Backbone = require('backbone');
Backbone.$ = jQuery;

Handlebars = require('handlebars');
_ = require('underscore');

var Atlas = require('./js/models/atlas.js');

require('./js/helpers.js'); // Handelbars helpers
require('bootstrap/dist/js/bootstrap.min.js'); // bootsrrap

var HomeView = require('./js/views/home');
var Network = require('./js/views/network');
var psicquic = require('biojs-rest-psicquic');
var Info = require('./js/views/info'), info;

var hView = null;

var _search = function(){
    
    hView.update(10);
    
    var atlas = new Atlas({query:arguments[0], expanded:arguments[1]});
    atlas.fetch({
            error: function (errorResponse, a) {
                setTimeout(function(){
                    hView.alert('<strong>Error</strong>, there was a problem with the request. Please try again later.', 'alert-error');
                    console.error('Ajax Error, could not fetch interactions from', window.iAtlas.properties.psicquicServer);
                }, 200);
            }
        })
        .done(function(){
            hView.update(100);
            
            if(atlas.get('interactions').length > 0){
                var network = new Network({el:'body', data: atlas});
                network.render();
            }else{
                // timeout so progress bar animation can be seen
                setTimeout(function(){
                    hView.alert('<strong>Sorry</strong>, we couldn\'t find interactions for your query', 'alert-warning');
                    hView.showSearch();
                }, 200);
            }
    });
};

//Init Home View
var _homeView = function(err, resp, data){
    var parts = data.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    data = parts.join('.');
    
    hView = new HomeView({el:'body', count:data, example: window.iAtlas.properties.example});
    hView.render();
};

var _onNodeClick = function(d){
    console.log(d);
    /*if(_.isUndefined(info)){
        info = new Info({el:'#info', data: d});
        info.render();
    }*/
};

// Init vent and register events
var _events = function(){
    // init properties
    iAtlas.properties = require('./js/properties');

    // init Events
    iAtlas.vent = {};
    _.extend(iAtlas.vent, window.Backbone.Events);
    
    Backbone.on('nodeClick', _onNodeClick);
    
    iAtlas.vent.on('search', _search);
};

// Initialize App
var _init = function(){
    
    window.iAtlas = {};
    
    _events();
    
    // query server and render homeview
    psicquic.url(iAtlas.properties.psicquicServer).proxy(iAtlas.properties.proxy).count('*', _homeView);
}();

