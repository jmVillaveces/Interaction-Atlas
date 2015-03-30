var templates = require('../templates');
var cytoscape = require('cytoscape');

var _trim = true;

var _layout = {
    name: 'concentric',
    concentric: function(){ return this.data('weight'); },
    levelWidth: function( nodes ){ return 10; },
    padding: 10
};

var _color = ['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#e6550d', '#fd8d3c', '#fdae6b', '#fdd0a2', '#31a354', '#74c476', '#a1d99b', '#c7e9c0', '#756bb1', '#9e9ac8', '#bcbddc', '#dadaeb', '#636363', '#969696', '#bdbdbd', '#d9d9d9'];

var _nodes = [], _links = [], _visnodes = [], _vislinks = [], _legend = 'data(id)', _score = ['none', 'width'];

var _nodeStyle = {
    'font-size': 10,
    'content': _legend,
    'text-valign': 'bottom',
    'min-zoomed-font-size': 8,
    'width': 'mapData(weight, 0, 100, 10, 60)',
    'height': 'mapData(weight, 0, 100, 10, 60)',
    'pie-size': '100%'
};

var _edgeStyle = {
    'opacity': 0.666,
    'width': 1,
    'line-color': '#ddd',
    'curve-style': 'haystack'
};

var _selectedStyle = {
        'background-color': 'black',
        'opacity': 1,
        'pie-size': '80%'
};

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

var _processData = function(){
    
    _nodes = App.model.attributes.interactors.map(function(i){
        var n = i.attributes;
        n.weight = 0;
        
        //Create taxa attr for pie mapping
         _.each(n.taxonomy, function(t){
             n.taxa = (n.taxa) ? n.taxa : {};
             n.taxa[t] = 10/n.taxonomy.length;
         });
        
        return n;
    });
    
    //Calculate node degree
    _links = App.model.attributes.interactions.map(function(i){
        var l = i.attributes;
        
        var t = _.find(_nodes, function(n){return n.id === l.target;});
        var s = _.find(_nodes, function(n){return n.id === l.source;});
                
        t.weight = t.weight + 1;
        s.weight = s.weight + 1;
        
        //Create scre attr for score mapping
        _.each(l.scores, function(s){
            l.scre = (l.scre) ? l.scre : {};
            l.scre[s.name] = s.score;
        });
        
        return l;
    });
    this.update();
};

var _ready = function(e){
    Backbone.trigger('graph_ready', e, {nodes:_visnodes, links:_vislinks});
};


module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        
        this.cy = null;
        
        // Update tags when model changes
        this.listenTo(Backbone, 'got_data', _processData);
        
        this.listenTo(Backbone, 'save', _save);
    },
    
    layout: function(_){
        if (!arguments.length) return _layout;
        
        _layout = _;
        
        //update cy
        if(this.cy) this.cy.layout(_layout);
        
        return this;
    },
    
    trim : function(_){
        if (!arguments.length) return _trim;
        
        _trim = _;
        
        return this;
    },
    
    legend : function(_){
        if (!arguments.length) return _legend;
        
        _legend = _;
        
        //update cy
        if(this.cy){
            _nodeStyle.content = _legend;
            
            
            var style = cytoscape.stylesheet().selector('node').css(_nodeStyle).selector('edge').css(_edgeStyle).selector(':selected').css(_selectedStyle);
            this.cy.style(style);
        }
        
        return this;
    },
    
    score : function(_){
        
        if (!arguments.length) return _score;
        _score = _;
        
        _edgeStyle.opacity = 0.666;
        _edgeStyle.width = 1;
        _edgeStyle['line-color'] = '#ddd';
        
        if(_score[0] !== 'none'){ 
            if(_score[1] === 'opacity'){
                _edgeStyle.opacity = 'mapData(scre.'+_score[0]+', 0, 1, 0, 1)';
                _edgeStyle['line-color'] = '#000';
            }else if(_score[1] === 'width'){
                _edgeStyle.width = 'mapData(scre.'+_score[0]+', 0, 1, 1, 5)';
            }
        }
        
        var style = cytoscape.stylesheet().selector('node').css(_nodeStyle).selector('edge').css(_edgeStyle).selector(':selected').css(_selectedStyle);
        if(this.cy) this.cy.style(style);
        
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
    
    dijkstra : function(source, target){
        var dijkstra = this.cy.elements().dijkstra('#'+source);
        var path = dijkstra.pathTo(this.cy.$('#'+target));
        
        this.cy.elements().removeClass('highlighted');
        
        var i = 0;
        var highlightNextEle = function(){
            
            if( i < path.length ){
                path[i].addClass('highlighted');
                i++;
                setTimeout(highlightNextEle, 800);
            }
        };
        
        highlightNextEle();
    },
    
    update: function(){
        
        _visnodes = _nodes; 
        _vislinks = _links;
        
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
        
        var taxonomies = _.union.apply(_, _.pluck(_.pluck(nodes, 'data'), 'taxonomy'));
        
        if(taxonomies.length < 16){
            _.each(taxonomies, function(t,i){
                _nodeStyle['pie-' + (i+1) + '-background-color'] = _color[i];
                _nodeStyle['pie-' + (i+1) + '-background-size'] = 'mapData(taxa.' + t + ', 0, 10, 0, 100)';
            }, this);
        }
        
        var div = document.getElementById(this.options.el);
        
        var options = {
            container: div,
            
            // this is an alternative that uses a bitmap during interaction
            textureOnViewport: true,
            // interpolate on high density displays instead of increasing resolution
            pixelRatio: 1,
            // a motion blur effect that increases perceived performance for little or no cost
            motionBlur: true,


            style: cytoscape.stylesheet().selector('node')
            .css(_nodeStyle)
            .selector('edge')
            .css(_edgeStyle)
            .selector(':selected')
            .css(_selectedStyle)
            .selector('node.highlighted')
            .css({
                'background-color': '#E8747C',
                'pie-size': '0%',
                'transition-property': 'pie-size, background-color',
                'transition-duration': '0.5s'
            })
            .selector('edge.highlighted')
            .css({
                'background-color': '#E8747C',
                'line-color': '#E8747C',
                'width': 4,
                'transition-property': 'background-color, line-color, width',
                'transition-duration': '0.5s'
            })
        };
        
        options.layout = _layout;
        options.elements = { nodes : nodes, edges : links };
        options.ready = _ready;
        
        this.cy = cytoscape(options);
        
        //Events
        this.cy.on('tap', 'node', _onNodeTapped);
        this.cy.on('mouseover ', 'node', function(){ $('body').attr('style', 'cursor:pointer'); });
        this.cy.on('mouseout ', 'node', function(){ $('body').attr('style', 'cursor:auto'); });
        
        
        
        /*var dijkstra = this.cy.elements().dijkstra('#P52701');
        var bfs = dijkstra.pathTo(this.cy.$('#P04116') );
        
        console.log(bfs.length);
        _.each(bfs, function(e){ console.log(e.id()); });*/
        //console.log(bfs.path.length);
    }
});