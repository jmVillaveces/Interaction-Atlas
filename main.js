var $ = require('jquery');
window.jQuery = $; // set as global
window.Backbone = require('backbone');
Backbone.$ = $;

window.Handlebars = require('handlebars');

require('bootstrap/dist/js/bootstrap.min.js');

var HomeView = require('./js/views/home');

var homeView = new HomeView();