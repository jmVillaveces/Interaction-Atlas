var $ = require('jquery');
window.jQuery = $; // set as global
window.Backbone = require('backbone');
Backbone.$ = $;

window.Handlebars = require('handlebars');

window.iAtlas = {};

window.iAtlas.properties = require('./js/properties');

require('bootstrap/dist/js/bootstrap.min.js');

var HomeView = require('./js/views/home');
var psicquic = require('biojs-rest-psicquic');

//Init Home View
var _homeView = function(err, resp, data){
    var parts = data.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    data = parts.join(".");
    new HomeView({el:'body', count:data}).render();
};

var _init = function(){
    psicquic.url(window.iAtlas.properties.psicquicServer).proxy(window.iAtlas.properties.proxy).count('*', _homeView);
}();


//

//var homeView = new HomeView();
