// libraries
var d3 = require('d3');
require('d3-tip')(d3);

var force = require('./forcegraph.js');
var matrix = require('./matrix.js');
var circle = require('./circle.js');

//private varibles 
var _data = null,
    _svg = null,
    _width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth,
    _height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight,
    _svg = null,
    _g = null,
    _current = null,
    _layout = null;

/* Initialize tooltip */
var _tip = d3.tip().attr('class', 'd3-tip').direction('e').html(function(d) { 
    return '<strong>'+d.id+'</strong> ';//+ tax; 
});

var _formatdata = function(data){
    var nodes = data.get('interactors').toJSON();
    var links = data.get('interactions').toJSON();
    
    //remove nodes with only one link
    nodes = _.filter(nodes , function(n){
        var tmp = _.filter(links, function(l){
            return l.source === n.id || l.target === n.id;
        });
        
        n.weight = 0;
        return n.inQuery || tmp.length > 1;
    });
    
    // Filter and Add souce and target references to links
    links =  _.filter(links, function(l){

        var target = _.find(nodes, function(n){
            return n.id === l.target;
        });
        
        var source = _.find(nodes, function(n){
            return n.id === l.source;
        });
        
        if(!_.isUndefined(target) && !_.isUndefined(source)){
            
            target.weight =  target.weight + 1;
            source.weight =  source.weight + 1;
            
            l.target = target;
            l.source= source;
            return true;
        }
        return false;
    });
    
    var max = _.max(nodes, function(d){ return d.weight; }).weight;
    var size = d3.scale.log().domain([1, max]).range([2,7]);
    var colors = d3.scale.category20c();
    _.each(nodes, function(n){ 
        n.size = size(n.weight + 1);
        n.color = colors(n.taxonomy ? n.taxonomy[0] : null);
    });
    
    return {nodes: nodes, links: links};
};

var _initSelector = function(_){
    _svg = d3.selectAll(_);
    
    var zoom = d3.behavior.zoom()
        .on('zoom', function(){
            _g.attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')');
        });
    
    _g = _svg.call(zoom).call(_tip).append('g');
};

//Listen to tension event
Backbone.on('tension', function(t){
    if(_.has(_current, 'tension')) _current.tension(t);
});

//Listen to sort event
Backbone.on('sort', function(s){
    if(_.has(_current, 'order')) _current.order(s);
});

// Public members
var vis = function(){};

vis.data = function(_){
    if (!arguments.length) return _data;
    _data = _formatdata(_);
    return vis;
};

vis.layout = function(_){
    if (!arguments.length) return _layout;
    _layout = _;
    return vis;
};

vis.selector = function(_){
    if (!arguments.length) return _svg;
    _initSelector(_);
    return vis;
};

vis.width = function(_){
    if (!arguments.length) return _width;
    _width = _;
    return vis;
};

vis.height = function(_){
    if (!arguments.length) return _height;
    _height = _;
    return vis;
};

vis.update = function(){
    _svg.attr('width', _width).attr('height', _height);
    
    if(_current !== null) _current.destroy();
    
    if(_layout === 'radial'){
        _current = circle.width(800).height(800).tooltip(_tip).selector(_g).data(_data).update();
    }else if (_layout === 'matrix'){
        _current = matrix.width(800).height(800).tooltip(_tip).selector(_g).data(_data).update();
    }else{
        _current = force.data(_data).width(_width).height(_height).tooltip(_tip).selector(_g).update();
    }
    
    return vis;
};

module.exports = vis;