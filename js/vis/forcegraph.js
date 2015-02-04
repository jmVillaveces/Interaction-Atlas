//Libraries
var d3 = require('d3');

//Events
var NODE_CLICK = 'nodeClick';

var _data = null,
    _selector = null,
    _forceLayout = null,
    _tooltip = null,
    _width = null,
    _height = null;

var _tick = function(){
    _selector.selectAll('.link')
        .attr('x1', function(d) { return d.source.x; })
        .attr('y1', function(d) { return d.source.y; })
        .attr('x2', function(d) { return d.target.x; })
        .attr('y2', function(d) { return d.target.y; });

    _selector.selectAll('.node')
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; });
};    

var highlightLinks = function(d, b){
    _selector.selectAll('.link').attr('stroke', function(l){
        if(b) return (l.source == d || l.target == d) ? '#000' : '#ccc';
        return '#ccc';
    }).attr('stroke-opacity', function(l){
        if(b) return (l.source == d || l.target == d) ? 1 : 0.4;
        return 0.4;
    });
};

var _mouseover = function(d){
    d3.select(this)
        .style('cursor','pointer')
        .attr('stroke', '#000')
        .attr('stroke-width', 2);
    
    highlightLinks(d, true);
    _tooltip.show(d);
};

var _mouseout = function(d){
    if(!d.searched)
        d3.select(this)
            .style('cursor','default')
            .attr('stroke', 'gray')
            .attr('stroke-width', 1.5);
    
    highlightLinks(d, false);
    _tooltip.hide(d);
};

// Public members
var force = function(){};

force.data = function(_){
    if (!arguments.length) return _data;
    _data = _;
    return force;
};

force.selector = function(_){
    if (!arguments.length) return _selector;
    _selector = _;
    return force;
};

force.width = function(_){
    if (!arguments.length) return _width;
    _width = _;
    return force;
};

force.height = function(_){
    if (!arguments.length) return _height;
    _height = _;
    return force;
};

force.update = function(){
    
    // start the force layout.
    _forceLayout = d3.layout.force()
        .size([_width, _height])
        .on('tick', _tick)
        .nodes(_data.nodes)
        .links(_data.links)
        .start();
    
    var links = _selector.selectAll('.link').data(_data.links);
    links.enter().append('line')
        .attr('class', 'link')
        .attr('fill', 'none')
        .attr('stroke', 'gray')
        .attr('stroke-opacity', 0.4)
        .attr('fill', 'none')
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1.5)
        .attr('x1', function(d) { return d.source.x; })
        .attr('y1', function(d) { return d.source.y; })
        .attr('x2', function(d) { return d.target.x; })
        .attr('y2', function(d) { return d.target.y; });
    
    var nodes = _selector.selectAll('.node').data(_data.nodes.filter(function(n){ return !_.has(n, 'visible');}));
    nodes.enter().append('circle')
            .attr('class', 'node')
            .attr('stroke-width', 1.5)
            .attr('stroke', 'gray')
            .attr('r', function(d){return d.size;})
            .on('mouseover', _mouseover)
            .on('mouseout', _mouseout)
            .on('click', function(d){
                Backbone.trigger(NODE_CLICK, d);
            })
            .call(_forceLayout.drag);
    
    nodes.attr('fill', function(d){ return d.color;})
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; });
    
    links.exit().remove();
    nodes.exit().remove(); 
    
    return force;
};

force.destroy = function(){
    //remove nodes and links
    _selector.selectAll('.link').remove();
    _selector.selectAll('.node').remove();
    _selector.attr('transform', '');
    
    _forceLayout.stop();
    
    return force;
};

force.tooltip =  function(_){
    if (!arguments.length) return _tooltip;
    _tooltip = _;
    return force;
};

module.exports = force;