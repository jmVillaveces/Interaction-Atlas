jQuery = $ = require('jquery');
Backbone = require('backbone');
Backbone.$ = jQuery;

Handlebars = require('handlebars');
_ = require('underscore');

require('./js/helpers.js'); // Handelbars helpers
require('bootstrap/dist/js/bootstrap.min.js'); // bootstrap

App = {};

//Model
var Model = require('./js/models/main.js');
App.model = new Model();

//Views
var Main = require('./js/views/main');
var Navbar = require('./js/views/navbar');
var SideMenu = require('./js/views/sidemenu');
var Logger = require('./js/views/logger');
var Graph = require('./js/views/graph');
var Options = require('./js/views/options');
var UPDialog = require('./js/views/UPdialog');

App.views = {};

//Main
App.views.main = new Main({el:'body'});
App.views.main.render();

//Nav bar
App.views.navbar = new Navbar({el:'#navbar'});
App.views.navbar.render();

App.views.side = new SideMenu({el:'#sidemenu'});
App.views.side.render();

App.views.options = new Options({el:'#profile'});
App.views.options.render();

//Dialog
App.views.UPDialog = new UPDialog({el:'#dialog'});

//Logger
App.views.logger = new Logger({el:'#logger'});

//Graph
App.views.graph = new Graph({el:'network'});

//Router
var Router = require('./js/router/router');
App.router = new Router();
Backbone.history.start();
