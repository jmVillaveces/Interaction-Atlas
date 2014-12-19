jQuery = $ = require('jquery');
Backbone = require('backbone');
Backbone.$ = jQuery;

Handlebars = require('handlebars');
_ = require('underscore');

var Atlas = require('./js/models/atlas.js');
var UPprotein = require('./js/models/UPprotein');

require('./js/helpers.js'); // Handelbars helpers
require('bootstrap/dist/js/bootstrap.min.js'); // bootsrrap

var HomeView = require('./js/views/home');
var Network = require('./js/views/network');
var psicquic = require('biojs-rest-psicquic');
var Dialog = require('./js/views/dialog');
var UPproteinView = require('./js/views/UPprotein');
var Pathway = require('./js/views/pathway');


var hView = null;
var _data;

var _pathway = function(){
    var ids = [];
    _data.get('interactors').each(function(d) {
        ids.push(d.get('id'));
    });
    
    var data = {
        color : '#449d44',
        title : 'Pathway Analysys'
    };
    
    var dialog = new Dialog({el:'#dialog', data: data});
    dialog.render();
    
    var url = 'http://www.reactome.org:80/AnalysisService/identifiers/?pageSize=20&page=1&sortBy=ENTITIES_PVALUE&order=ASC&resource=TOTAL'; 
    $.ajax({
        url:url,
        type : 'POST',
        data : ids.join('\n'),
        contentType : 'text/plain',
        dataType : 'json',
        success : function(data){
            var pathway = new Pathway({el : '.modal-body', data: data});
            pathway.render();
        }
    });
};

var _search = function(){
    
    hView.update(10);
    
    _data = new Atlas({query:arguments[0], expanded:arguments[1]});
    _data.fetch({
            error: function (errorResponse, a) {
                setTimeout(function(){
                    hView.alert('<strong>Error</strong>, there was a problem with the request. Please try again later.', 'alert-error');
                    console.error('Ajax Error, could not fetch interactions from', window.iAtlas.properties.psicquicServer);
                }, 200);
            }
        })
        .done(function(){
            hView.update(100);
            
            if(_data.get('interactions').length > 0){
                var network = new Network({el:'body', data: _data});
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
    
    var protein = new UPprotein({id:d.id});
    protein.fetch({
        error : function (errorResponse, a) {
            console.error(errorResponse, a);
        },
        contentType : 'text/xml',
        dataType : 'xml'
    }).done(function(){
        var proteinView = new UPproteinView({el : '.modal-body', d: d, data: protein.toJSON()});
        proteinView.render(protein.toJSON());
    });
    
    
    var taxa = _.find(_data.get('taxa'), function(t){return t.taxid == d.taxonomy[0];});
   
    var subt = taxa.commonname ? ' ('+taxa.commonname+')' : '';
    var data = {
        color : d.color, 
        title : d.id,
        subtitle : taxa.scientificname + subt
    };
    
    var dialog = new Dialog({el:'#dialog', data: data});
    dialog.render();
};

// Init vent and register events
var _events = function(){
    // init properties
    iAtlas.properties = require('./js/properties');

    // init Events
    iAtlas.vent = {};
    _.extend(iAtlas.vent, window.Backbone.Events);
    
    Backbone.on('nodeClick', _onNodeClick);
    Backbone.on('pathway', _pathway);
    
    iAtlas.vent.on('search', _search);
};

// Initialize App
var _init = function(){
    
    window.iAtlas = {};
    
    _events();
    
    // query server and render homeview
    psicquic.url(iAtlas.properties.psicquicServer).proxy(iAtlas.properties.proxy).count('*', _homeView);
}();

