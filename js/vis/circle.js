//Libraries
var d3 = require('d3');

//Events
var NODE_CLICK = 'nodeClick';

var _data = null,
    _selector = null,
    _tooltip = null,
    _width = null,
    _height = null,
    _tension = 0.85;

var _formatdata = function(data){

    var root = {id: 'root', children: []};
    
    var groups = _.groupBy(data.nodes, 'taxonomy');
    
    _.each(_.keys(groups), function(k){
        var obj = {id: k, children: groups[k], parent: root};
        root.children.push(obj);
        
        _.each(groups[k], function(n){
            n.parent = obj;
        });
    });
    
    var line = d3.svg.line.radial()
        .interpolate('bundle')
        .tension(_tension)
        .radius(function(d) {return d.y; })
        .angle(function(d) { return d.x / 180 * Math.PI; });
    
    var bundle = d3.layout.bundle();
    
    return {
        nodes : data.nodes,
        root : root,
        links : data.links,
        line : line,
        bundle : bundle
    };
};

// Public members
var circle = function(){};

circle.data = function(_){
    if (!arguments.length) return _data;
    _data = _formatdata(_);
    return circle;
};

circle.selector = function(_){
    if (!arguments.length) return _selector;
    _selector = _;
    return circle;
};

circle.width = function(_){
    if (!arguments.length) return _width;
    _width = _;
    return circle;
};

circle.height = function(_){
    if (!arguments.length) return _height;
    _height = _;
    return circle;
};

circle.update = function(){
    
    var diameter = Math.min(_width, _height),
        radius = diameter / 2,
        innerRadius = radius - 120;
    
    var cluster = d3.layout.cluster()
        .size([360, innerRadius])
        .sort(null)
        .value(function(d) { return d.weight; });
    
    _selector.attr('transform', 'translate(' + radius + ',' + radius + ')');
    
    var link = _selector.selectAll('.link'),
        node = _selector.append('g').selectAll('.node');
    
    var nodes = cluster(_data.root),
        links = _data.links;
    
    link = link
        .data(_data.bundle(links))
        .enter().append('path')
        .each(function(d) { d.source = d[0]; d.target = d[d.length - 1]; })
        .attr('class', 'link')
        .attr('stroke', 'steelblue')
        .attr('stroke-opacity', 0.4)
        .attr('fill', 'none')
        .attr('d', _data.line);

    node = node
        .data(nodes.filter(function(n) { return !n.children; }))
        .enter().append('g')
        .attr('transform', function(d) { return 'rotate(' + (d.x - 90) + ')translate(' + (d.y + 8) + ',0)' + (d.x < 180 ? '' : 'rotate(180)'); });
    
    node.append('text')
        .attr('class', 'node')
        .attr('dy', '.31em')
        .attr('font-size','10px')
        .style('text-anchor', function(d) { return d.x < 180 ? 'start' : 'end'; })
        .text(function(d) { return d.id; })
        .on('mouseover', mouseovered)
        .on('mouseout', mouseouted)
        .on('click', function(d){ Backbone.trigger(NODE_CLICK, d); });
    
    
    function mouseovered(d){
        
        var ndes = {};
        
        link.filter(function(l){ return (l.target.id === d.id || l.source.id === d.id); })
            .attr('stroke', 'red')
            .attr('stroke-width', 2)
            .attr('stroke-opacity', 1)
            .each(function(l){
                ndes[l.target.id] = l.target;
                ndes[l.source.id] = l.source;
            });
        
        node.filter(function(n){ return _.has(ndes, n.id); })
            .selectAll('text')
            .attr('font-size','14px')
            .attr('fill', 'red');
        
        d3.select(this)
            .attr('cursor', 'pointer')
            .attr('font-size','14px')
            .attr('fill', 'red');
    }
    
    function mouseouted(d){
        
         var ndes = {};
        
        link.filter(function(l){ return (l.target.id === d.id || l.source.id === d.id); })
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 1)
            .attr('stroke-opacity', 0.4)
            .each(function(l){
                ndes[l.target.id] = l.target;
                ndes[l.source.id] = l.source;
            });
        
        node.filter(function(n){ return _.has(ndes, n.id); })
            .selectAll('text')
            .attr('font-size','10px')
            .attr('fill', '#000');
        
        d3.select(this)
            .attr('cursor', 'default')
            .attr('font-size','10px')
            .attr('fill', '#000');
    }
    
    return circle;
};

circle.destroy = function(){
    
    //remove nodes and links
    _selector.selectAll('.link').remove();
    _selector.selectAll('.node').remove();
    _selector.attr('transform', '');
    
    return circle;
};

circle.tooltip =  function(_){
    if (!arguments.length) return _tooltip;
    _tooltip = _;
    return circle;
};

circle.tension = function(_){
    if (!arguments.length) return _tension;
    _tension = _;
    
    _data.line.tension(_tension);
    d3.selectAll('.link').attr('d', _data.line);
    return _tension;
};

module.exports = circle;