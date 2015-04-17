var FileNavigator = require('../services/file-navigator');
var _navigator = null;

var _nodeCols = ['id'];
var _edgeCols = ['source', 'target'];

var _file = null, _delimiter = '\t';

var _parseObj = function(keys, vals){
    
    var obj = {};
    _.each(keys, function(k,i){
        obj[k] = vals[i];
    });
    
    return obj;
};

// callback: function(err, headers)
var _hasCols = function(cols, cb){
    
    _navigator.readLines(0, 1, function(err, index, lines, eof){
        if (err) {
            cb(err);
            return;
        }
        
        var headers = lines[0].toLowerCase().split(_delimiter);
        
        var missing =[];
        _.each(cols, function(c){
            var i = _.indexOf(headers, c);
            if(i === -1) missing.push(c);
        });
        
        if(missing.length){
            cb('File '+_file.name+' is missing mandatory column(s) ( ' + missing.join(', ')+' )');
        }else{
            cb(null, headers);
        }
        
    });
};

//Public members
var reader = function(){};

reader.file = function(_){
    if (!arguments.length)
        return _file;
    _file = _;
    return reader;
};

// callback: function(err, nodes)
reader.parseNodes = function(cb){
    
    _navigator = new FileNavigator(_file);
    
    _hasCols(_nodeCols, function(err, headers){
        if(err){
            cb(err);
            return;
        }
        
        var nodes = [];
        _navigator.readSomeLines(1, function linesHandler(err,index,lines,eof,progress){
            if(err){ 
                cb(err);
                return;
            }
            
            _.each(lines, function(l){
                nodes.push(_parseObj(headers, l.split(_delimiter)));
            });
            
            if(eof){ 
                cb(null, nodes);    
                return;
            }
            _navigator.readSomeLines(index + lines.length, linesReadHandler);
            
        });
    });
};

// callback: function(err, edges)
reader.parseEdges = function(cb){
    
    _navigator = new FileNavigator(_file);
    
    _hasCols(_edgeCols, function(err, headers){
        if(err){
            cb(err);
            return;
        }
        
        var nodes = [];
        _navigator.readSomeLines(1, function linesHandler(err,index,lines,eof,progress){
            if(err){ 
                cb(err);
                return;
            }
            
            _.each(lines, function(l){
                nodes.push(_parseObj(headers, l.split(_delimiter)));
            });
            
            if(eof){ 
                cb(null, nodes);    
                return;
            }
            _navigator.readSomeLines(index + lines.length, linesReadHandler);
            
        });
    });
};


module.exports = reader;