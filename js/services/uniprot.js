var $ = require('jQuery');

var _url = 'http://www.uniprot.org/uniprot/', _proxy = null;

//Private members
var _fetch = function(url, cb){
    $.ajax({url:url, success: cb});
};

var _eval_params = function(params){
    var str = '';
    if(typeof params === 'string'){
        return '?'+params;
    }else if(typeof params === 'object'){
        for(var key in params){
            if (params.hasOwnProperty(key)) str += key+'='+params[key]+'&';
        }
        str = '?'+str;
    }
    return str;
};

var _createUrl = function(query, params){
    
    var paramsStr = ''; 
    if(params !== null)
        paramsStr = _eval_params(params);
    
    var url = _url+query+paramsStr;
    
    if(_proxy === null) return url;
    
    return _proxy +'?url='+encodeURI(url);
};

//Public members
var uniprot = function(){};
    
uniprot.url = function(_){
    if (!arguments.length)
        return _url;
    _url = _;
    return uniprot;
};

uniprot.proxy = function(_){
    if (!arguments.length)
        return _proxy;
    _proxy = _;
    return uniprot;
};

uniprot.getDataByIds = function(nodes, params, callback){
    
    params = (_.isObject(params)) ? params : {};
    params.query = 'accession:' + nodes.join(' OR ');
    
    var url = encodeURI(_createUrl('', params));
    _fetch(url, callback);
};

module.exports = uniprot;