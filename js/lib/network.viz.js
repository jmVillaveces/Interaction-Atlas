var d3 = require('d3');

var _data = [],
    _width = 500,
    _height = 500,
    _layout = 'force',
    _svg = null;

var _tick = function(){
    _svg.selectAll('.link')
        .attr('x1', function(d) { return d.source.x; })
        .attr('y1', function(d) { return d.source.y; })
        .attr('x2', function(d) { return d.target.x; })
        .attr('y2', function(d) { return d.target.y; });

    _svg.selectAll('.node')
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
    
     // start the force layout.
    var force = d3.layout.force()
        .size([_width, _height])
        .on('tick', _tick)
        .nodes(nodes)
        .links(links)
        .start();
    
    _svg.selectAll('.link').remove();
    links = _svg.selectAll('.link').data(links);
    
    links.enter().append('line')
        .attr('class', 'link')
        .attr('fill', 'none')
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1.5)
        .attr('x1', function(d) { return d.source.x; })
        .attr('y1', function(d) { return d.source.y; })
        .attr('x2', function(d) { return d.target.x; })
        .attr('y2', function(d) { return d.target.y; });
    
    nodes = _svg.selectAll('.node').data(nodes);
    
    nodes.enter().append('circle')
            .attr('class', 'node')
            .attr('stroke-width', 1.5)
            .attr('stroke', function(d){return 'red';})
            .attr('r', 5)
            .on('mouseover', function(d){
                    
            })
            .on('mouseout', function(d){
                    
            })
            .on('click', function(d){
            })
            .call(force.drag);
    
    _svg.transition().attr('transform', '');
    
    nodes.attr('fill', function(d){ return 'blue';})
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
    _svg = d3.selectAll(_);
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