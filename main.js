jQuery = $ = require('jquery');
Backbone = require('backbone');
Backbone.$ = jQuery;

Handlebars = require('handlebars');
_ = require('underscore');

require('./js/helpers.js'); // Handelbars helpers
require('bootstrap/dist/js/bootstrap.min.js'); // bootstrap
require('./js/lib/jquery.minicolors.min.js'); // minicolors
require('./js/lib/jLouvain.js'); // Community detection

App = {};

App.init = function(options){
    
    //Model
    var Model = require('./js/models/main.js');
    App.model = new Model(options);
    
    var serverLst = require('./js/collections/serversList.js'); //JSON list of servers in case of error
    //Server collection
    var Servers = require('./js/collections/psicquicServers.js');
    //App.model.servers = new Servers(serverLst);
    App.model.servers = new Servers();
    
    App.model.servers.fetch();
    
    //Views
    var Main = require('./js/views/main');
    var Navbar = require('./js/views/navbar');
    var SideMenu = require('./js/views/sidemenu');
    var Logger = require('./js/views/logger');
    var Graph = require('./js/views/graph');
    var UPDialog = require('./js/views/UPdialog');
    var Pathway = require('./js/views/pathway');
    var Import = require('./js/views/import');
    var Layout = require('./js/views/layout');

    App.views = {};

    //Main
    App.views.main = new Main({el:'body'});
    App.views.main.render();

    //Nav bar
    App.views.navbar = new Navbar({el:'#navbar'});
    App.views.navbar.render();

    App.views.side = new SideMenu({el:'#sidemenu'});
    App.views.side.render();

    //Dialogs
    App.views.UPDialog = new UPDialog({el:'#dialog'});
    App.views.import = new Import({el:'#dialog'});
    App.views.layout = new Layout({el:'#dialog'});
    App.views.pathway = new Pathway({el:'#dialog'});

    //Logger
    App.views.logger = new Logger({el:'#logger'});

    //Graph
    App.views.graph = new Graph({el:'network'});

    //Import additional layout libraries
    Springy = require('springy');
    
    //Init minicolors
    $('.minicolors-input').minicolors({ theme:'bootstrap'});
    
    //Init tooltips
    $('[data-toggle="tooltip"]').tooltip();
};

App.init();