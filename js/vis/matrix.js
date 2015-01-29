//Libraries
var d3 = require('d3');

//Events
var NODE_CLICK = 'nodeClick';

var _data = null,
    _selector = null,
    _tooltip = null,
    _width = null,
    _height = null,
    _margin = {top: 100, right: 0, bottom: 10, left: 100};

var _formatdata = function(data){

    var mat = [],
        nodes = data.nodes,
        n = nodes.length;

    // Compute index per node.
    nodes.forEach(function(node, i) {
        node.index = i;
        mat[i] = d3.range(n).map(function(j) { return {x: j, y: i, z: 0}; });
    });
    
    // Convert links to matrix; count character occurrences.
    data.links.forEach(function(link) {
        
        var scores = _.pick(link, 'scores').scores;
        var score =  _.find(scores, function(s){
            return s.name == 'iAtlas';
        });
        
        mat[link.source.index][link.target.index].z += score.score;
        mat[link.target.index][link.source.index].z += score.score;
    });
    
    var orderScale = d3.scale.ordinal().rangeBands([0, _width]);
    
    // Precompute the orders.
    var orders = {
        id: d3.range(n).sort(function(a, b) { return d3.ascending(nodes[a].id, nodes[b].id); }),
        taxa : d3.range(n).sort(function(a, b) { return d3.ascending(nodes[a].taxonomy.join(''), nodes[b].taxonomy.join(',')); }),
        weight : d3.range(n).sort(function(a, b) { return d3.ascending(nodes[a].weight, nodes[b].weight); }),
        inQuery : d3.range(n).sort(function(a, b) { return d3.ascending(nodes[a].inQuery, nodes[b].inQuery); })
    };
    
    return {
        matrix: mat,
        nodes: nodes,
        links: data.links,
        orderScale: orderScale,
        orders: orders
    };
};

var _rectmouseover = function (p) {
    d3.selectAll(".row text").attr('fill', function(d, i){
        if(i == p.y) return 'red';
        return 'black';
    });
    
    d3.selectAll(".column text").attr('fill', function(d, i){
        if(i == p.x) return 'red';
        return 'black';
    });
};

var _rectmouseout = function(){
    d3.selectAll(".row text").attr('fill', 'black');
    d3.selectAll(".column text").attr('fill', 'black');
};

var _textmouseover = function (p) {
    d3.select(this).attr('cursor', 'pointer');
};

var _textmouseout = function(){
    d3.select(this).attr('cursor', 'default');
};

// Public members
var matrix = function(){};

matrix.data = function(_){
    if (!arguments.length) return _data;
    _data = _formatdata(_);
    return matrix;
};

matrix.selector = function(_){
    if (!arguments.length) return _selector;
    _selector = _;
    return matrix;
};

matrix.width = function(_){
    if (!arguments.length) return _width;
    _width = _;
    return matrix;
};

matrix.height = function(_){
    if (!arguments.length) return _height;
    _height = _;
    return matrix;
};

matrix.update = function(){
    _selector.attr('transform', 'translate(' + _margin.left + ',' + _margin.top + ')');
    
    var z = d3.scale.linear().domain([0, 1]).clamp(true);

    var rowf = function(row) {
        var cell = d3.select(this).selectAll('.cell')
            .data(row.filter(function(d) { return d.z; }))
            .enter().append('rect')
            .attr('class', 'cell')
            .attr('x', function(d) { return _data.orderScale(d.x); })
            .attr('width', _data.orderScale.rangeBand())
            .attr('height', _data.orderScale.rangeBand())
            .style('fill-opacity', function(d) { return z(d.z); })
            .style('fill',  'blue')
            .on('mouseover', _rectmouseover)
            .on('mouseout', _rectmouseout);
    };
    
    // The default sort order.
    _data.orderScale.domain(_data.orders.id);

    _selector.append('rect')
        .attr('class', 'background')
        .attr('width', _width)
        .attr('height', _height)
        .attr('fill', '#eee');

    var row = _selector.selectAll('.row')
          .data(_data.matrix)
        .enter().append('g')
          .attr('class', 'row')
          .attr('transform', function(d, i) { return 'translate(0,' + _data.orderScale(i) + ')'; })
          .each(rowf);

    row.append('line')
        .attr('x2', _width)
        .attr('stroke', '#fff');

    row.append('text')
        .attr('x', -6)
        .attr('y', _data.orderScale.rangeBand() / 2)
        .attr('dy', '.32em')
        .attr('text-anchor', 'end')
        .attr('font-size','10px')
        .text(function(d, i) { return _data.nodes[i].id; })
        .on('mouseover', _textmouseover)
        .on('mouseout', _textmouseout)
        .on('click', function(d){
            Backbone.trigger(NODE_CLICK, d);
        });

    var column = _selector.selectAll('.column')
          .data(_data.matrix)
        .enter().append('g')
          .attr('class', 'column')
          .attr('transform', function(d, i) { return 'translate(' + _data.orderScale(i) + ')rotate(-90)'; });

    column.append('line')
        .attr('x1', -_width)
        .attr('stroke', '#fff');

    column.append('text')
        .attr('x', 6)
        .attr('y', _data.orderScale.rangeBand() / 2)
        .attr('dy', '.32em')
        .attr('font-size','10px')
        .attr('text-anchor', 'start')
        .text(function(d, i) { return _data.nodes[i].id; })
        .on('mouseover', _textmouseover)
        .on('mouseout', _textmouseout)
        .on('click', function(d){
            var node = _.find(_data.nodes, function(n){ 
                return n.id === d3.select(this).text();
            }, this);
        
            Backbone.trigger(NODE_CLICK, node);
        });
    
    return matrix;
};

matrix.destroy = function(){
    
    //remove nodes and links
    _selector.selectAll('g').remove();
    _selector.selectAll('rect').remove();
    _selector.attr('transform', '');
    
    return matrix;
};

matrix.tooltip =  function(_){
    if (!arguments.length) return _tooltip;
    _tooltip = _;
    return matrix;
};

matrix.categories =  function(){
    return _.keys(_data.orders);
};

matrix.order = function(value) {
    _data.orderScale.domain(_data.orders[value]);

    var t = _selector.transition().duration(2500);

    t.selectAll('.row')
        .delay(function(d, i) { return _data.orderScale(i) * 4; })
        .attr('transform', function(d, i) { return 'translate(0,' + _data.orderScale(i) + ')'; })
      .selectAll('.cell')
        .delay(function(d) { return _data.orderScale(d.x) * 4; })
        .attr('x', function(d) { return _data.orderScale(d.x); });

    t.selectAll('.column')
        .delay(function(d, i) { return _data.orderScale(i) * 4; })
        .attr('transform', function(d, i) { return 'translate(' + _data.orderScale(i) + ')rotate(-90)'; });
};

module.exports = matrix;