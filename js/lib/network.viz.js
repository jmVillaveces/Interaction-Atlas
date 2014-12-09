var d3 = require('d3');

var _data = [],
    _width = 500,
    _height = 500,
    _layout = 'force',
    _svg = null,
    _g = null,
    _colors = d3.scale.category20c();

var highlightLinks = function(d, b){
    _g.selectAll('.link').attr('stroke', function(l){
        if(b)
            return (l.source == d || l.target == d) ? '#000' : '#ccc';
       
        return '#ccc';
    });
};

var _mouseover = function(d){
    d3.select(this)
        .style('cursor','pointer')
        .attr('stroke', '#000')
        .attr('stroke-width', 2);
    
    highlightLinks(d, true);
};

var _mouseout = function(d){
    d3.select(this)
        .style('cursor','default')
        .attr('stroke', 'gray')
        .attr('stroke-width', 1.5);
    
    highlightLinks(d, false);
};

var _initSelector = function(_){
    _svg = d3.selectAll(_);
    
    var zoom = d3.behavior.zoom()
        .on('zoom', function(){
            _g.attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')');
        });
    
    _g = _svg.call(zoom).append('g');
};

var _tick = function(){
    _g.selectAll('.link')
        .attr('x1', function(d) { return d.source.x; })
        .attr('y1', function(d) { return d.source.y; })
        .attr('x2', function(d) { return d.target.x; })
        .attr('y2', function(d) { return d.target.y; });

    _g.selectAll('.node')
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; });
};

var _force = function(){
    var nodes = _data.get('interactors').toJSON(),
        links = _data.get('interactions').toJSON();
    
    _.each(links, function(l){
        
        l.target = _.find(nodes, function(n){
            return n.id == l.target;
        }); 
        
        l.source = _.find(nodes, function(n){
            return n.id == l.source;
        }); 
    });
    
    var max = _.max(nodes, function(d){ return d.weight; });
    
    var size = d3.scale.ordinal().domain([1, max]).range([3,7]);
    
    // start the force layout.
    var force = d3.layout.force()
        .size([_width, _height])
        .on('tick', _tick)
        .nodes(nodes)
        .links(links)
        .start();
    
    _g.selectAll('.link').remove();
    links = _g.selectAll('.link').data(links);
    
    links.enter().append('line')
        .attr('class', 'link')
        .attr('fill', 'none')
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1.5)
        .attr('x1', function(d) { return d.source.x; })
        .attr('y1', function(d) { return d.source.y; })
        .attr('x2', function(d) { return d.target.x; })
        .attr('y2', function(d) { return d.target.y; });
    
    nodes = _g.selectAll('.node').data(nodes);
    
    nodes.enter().append('circle')
            .attr('class', 'node')
            .attr('stroke-width', 1.5)
            .attr('stroke', 'gray')
            .attr('r', function(d){return size(d.weight);})
            .on('mouseover', _mouseover)
            .on('mouseout', _mouseout)
            .on('click', function(d){
                console.log(d);
            })
            .call(force.drag);
    
    _g.transition().attr('transform', '');
    
    nodes.attr('fill', function(d){return _colors(d.taxonomy ? d.taxonomy[0] : null);})
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; });
    
    links.exit().remove();
    nodes.exit().remove(); 
};

// Public members
var network = function(){};

network.data = function(_){
    if (!arguments.length)
        return _data;
    _data = _;
    return network;
};

network.width = function(_){
    if (!arguments.length)
        return _width;
    _width = _;
    return network;
};

network.height = function(_){
    if (!arguments.length)
        return _height;
    _height = _;
    return network;
};

network.layout = function(_){
    if (!arguments.length)
        return _layout;
    _layout = _;
    return network;
};

network.selector = function(_){
    
    if (!arguments.length)
        return _svg;
    
    _initSelector(_);
    return network;
};

network.update = function(){
    _svg.attr('width', _width).attr('height', _height);
    
    if (_layout == 'radial'){
        _radial();
    }else{
        _force();
    }
    return network;
};

module.exports = network;