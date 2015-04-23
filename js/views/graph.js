var templates = require('../templates');
var cytoscape = require('cytoscape');


var _isTouchDevice = 'ontouchstart' in window /* works on most browsers*/ || 'onmsgesturechange' in window; /* works on ie10*/

var _trim = false;

var _layout = {
    name: 'concentric',
    concentric: function(){ return this.data('degree'); },
    levelWidth: function( nodes ){ return 10; },
    padding: 10
};

var _color = ['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#e6550d', '#fd8d3c', '#fdae6b', '#fdd0a2', '#31a354', '#74c476', '#a1d99b', '#c7e9c0', '#756bb1', '#9e9ac8', '#bcbddc', '#dadaeb', '#636363', '#969696', '#bdbdbd', '#d9d9d9'];

var _visnodes = [], _vislinks = [], _legend = 'data(id)', _score = ['none', 'width'], _bgColor = '#fff', _boxSelectionEnabled = false;

var _style = [
    {
        selector:'node',
        css: {
            'font-size': 10,
            'content': _legend,
            'text-valign': 'bottom',
            'min-zoomed-font-size': 8,
            'width': 'mapData(degree, 0, 100, 10, 60)',
            'height': 'mapData(degree, 0, 100, 10, 60)'
        }
    },
    {
        selector:'edge',
        css: {
            'opacity': 0.666,
            'width': 1,
            'line-color': '#ddd',
            'curve-style': 'haystack'
        }
    },
    {
        selector:':selected',
        css: {
            'background-color': 'black',
            'opacity': 1,
            'line-color':'#000'
        }
    },
    {
        selector:'node.highlighted',
        css: {
            'background-color': '#E8747C',
            'transition-property': 'background-color',
            'transition-duration': '0.5s'
        }
    },
    {
        selector:'edge.highlighted',
        css: {
            'line-color': '#E8747C',
            'width': 4,
            'transition-property': 'background-color, line-color, width',
            'transition-duration': '0.5s'
        }
    },
    {
        selector:'core',
        css: {
            'active-bg-color': 'steelblue',
            'active-bg-opacity': 0.45,
            'selection-box-color': 'steelblue',
            'selection-box-border-color': 'steelblue',
            'selection-box-border-width': 2,
            'selection-box-opacity': 0.45   
        }
    }
];

var _save = function(){
    
    if(!this.cy) return;
    
    var png64 = this.cy.png();
    var a = $('<a>').attr('href', png64).attr('download', 'graph.png').appendTo('body');
    a[0].click();
    a.remove();
};

var _onNodeTapped = function(e){
    
    var id = e.cyTarget.id();
    var node = _.find(_visnodes, function(n){
        return n.id === id;
    });
    
    //Init uniprot dialog
    App.views.UPDialog.render(node);
};

var _ready = function(e){
    Backbone.trigger('graph_ready', e, {nodes:_visnodes, links:_vislinks});
};


module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        
        this.cy = null;
        
        this.bgColor(_bgColor);
        
        // Update tags when model changes
        this.listenTo(Backbone, 'got_data', this.update);
        
        this.listenTo(Backbone, 'save', _save);
    },
    
    layout: function(_){
        if (!arguments.length) return _layout;
        
        _layout = _;
        
        //update cy
        if(this.cy) this.cy.layout(_layout);
        
        //trigger layout changed
        Backbone.trigger('layout_changed', _layout);
        
        return this;
    },
    
    bgColor : function(_){
        if (!arguments.length) return _bgColor;
        
        _bgColor = _;
        
        $('#' + this.options.el).css('background-color', _);
        return this;
    },
    
    hColor : function(_){
        if (!arguments.length) return _style[3].css['background-color'];
        
        _style[3].css['background-color'] = _;
        _style[4].css['line-color'] = _;
        
        //update cy
        if(this.cy) this.cy.style(_style);
        return this;
    },
    
    legend : function(_){
        if (!arguments.length) return _legend;
        
        _legend = _;
        
        //update cy
        if(this.cy){
            _style[0].css.content = _legend;
            this.cy.style(_style);
        }
        
        return this;
    },
    
    boxSelectionEnabled : function(_){
        if (!arguments.length) return _boxSelectionEnabled;
        
        _boxSelectionEnabled = _;
        
        //update cy
        if(this.cy){
            this.cy.boxSelectionEnabled(_boxSelectionEnabled);
        }
        
        return this;
    },
    
    cy : function(){
        return cy;
    },
    
    score : function(_){
        
        if (!arguments.length) return _score;
        _score = _;
        
        var edgeStyle = _style[1].css;
        edgeStyle.opacity = 0.666;
        edgeStyle.width = 1;
        edgeStyle['line-color'] = '#ddd';
        
        if(_score[0] !== 'none'){ 
            if(_score[1] === 'opacity'){
                edgeStyle.opacity = 'mapData(scre.'+_score[0]+', 0, 1, 0, 1)';
                edgeStyle['line-color'] = '#000';
            }else if(_score[1] === 'width'){
                edgeStyle.width = 'mapData(scre.'+_score[0]+', 0, 1, 1, 5)';
            }
        }
        
        if(this.cy) this.cy.style(_style);
        
        return this;
    },
    
    find : function(searchTerm){
        
        if(!this.cy) return;
        
        var searchRegEx = new RegExp(searchTerm.toLowerCase());
        
        this.cy.nodes().unselect();
        
        if(searchTerm.length === 0) return;
        
        _.each(this.cy.nodes(), function(n, i){
            if(n.id().toLocaleLowerCase().search(searchRegEx) >= 0){
                n.select();
            }
        });
    },
    
    algorithm : function(algorithm, options){
        
        this.cy.elements().removeClass('highlighted');
        if(algorithm === 'astar'){
        
            var aStar = this.cy.elements().aStar({ root: '#' + options.source, goal: '#' + options.target });
            if(aStar.found)
                aStar.path.addClass('highlighted');
        
        }else if(algorithm === 'bellmanFord'){
        
            var bf = this.cy.elements().bellmanFord({ root: '#' + options.source });
            bf.pathTo( '#' + options.target).addClass('highlighted');
        
        }else if(algorithm === 'breadthfirst'){
            
            var bfs = this.cy.elements().bfs('#' + options.source, function(){}, false);
            if(bfs.found)
                bfs.path.addClass('highlighted');
        
        }else if(algorithm === 'dijkstra'){
            
            var dijkstra = this.cy.elements().dijkstra('#' + options.source);
            var path = dijkstra.pathTo(this.cy.$('#' + options.target));
            path.addClass('highlighted');
        
        }else if(algorithm === 'floydWarshall'){
            
            var fw = this.cy.elements().floydWarshall();
            fw.path('#' + options.source, '#' + options.target).addClass('highlighted');
            
        }else if(algorithm === 'kargerStein'){
            
            var ks = this.cy.elements().kargerStein();
            console.log(ks);
            ks.cut.addClass('highlighted');
            
        }else if(algorithm === 'kruskal'){
           this.cy.elements().kruskal().addClass('highlighted');
        }
    },
    
    update: function(){
        
        _visnodes = App.model.attributes.interactors.toJSON(); 
        _vislinks = App.model.attributes.interactions.toJSON();
        
        //Trim the graph
        if(_trim){
            
            _visnodes = _.filter(_visnodes, function(n){
                var w = n.weight;
                n.weight = 0;
                return  w > 1;
            });
            
            _vislinks = _.filter(_vislinks, function(l){
            
                var t = _.find(_visnodes, function(n){return n.id === l.target;});
                var s = _.find(_visnodes, function(n){return n.id === l.source;});

                if(_.isObject(t) && _.isObject(s)){
                    t.weight = t.weight + 1;
                    s.weight = s.weight + 1;
                    return true;
                }

                return false;
            });
        }
        
        var nodes = _.map(_visnodes, function(n){ return {data:n}; });
        var links = _.map(_vislinks, function(n){ return {data:n}; });
        
        var div = document.getElementById(this.options.el);
        
        // create cy
        this.cy = cytoscape({
            container: div,
            
            // this is an alternative that uses a bitmap during interaction
            textureOnViewport: true,
            // interpolate on high density displays instead of increasing resolution
            pixelRatio: 1,
            // a motion blur effect that increases perceived performance for little or no cost
            motionBlur: true,
            
            // interaction options:
            minZoom: 1e-50,
            maxZoom: 1e50,
            zoomingEnabled: true,
            userZoomingEnabled: true,
            panningEnabled: true,
            userPanningEnabled: true,
            boxSelectionEnabled: _boxSelectionEnabled,
            selectionType: _isTouchDevice ? 'additive' : 'single',
            touchTapThreshold: 8,
            desktopTapThreshold: 4,
            autolock: false,
            autoungrabify: false,
            autounselectify: false,
            
            
            
            style: _style,
            layout: _layout,
            ready: _ready,
            elements: {nodes : nodes, edges : links}
        });
        
        //Events
        this.cy.on('tap', 'node', _onNodeTapped);
        this.cy.on('mouseover ', 'node', function(){ $('body').attr('style', 'cursor:pointer'); });
        this.cy.on('mouseout ', 'node', function(){ $('body').attr('style', 'cursor:auto'); });
        
        var cy = this.cy;
        this.cy.batch(function(){
            _.each(cy.nodes(),function(n){ 
                n.data('degree', n.degree());
            });
        });
    }
});