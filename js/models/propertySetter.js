var _propertyTable = {};

var _direct_mapping = function(prop){
    App.views.graph.cy.batch(function(){
        prop.elements.filter('[' + prop.attr + ']').forEach(function(ele){
            ele.css(prop.cssAttr, ele.data(prop.attr));
        });
    });
};

var _discrete_mapping = function(prop){
    _.each(prop.searchTerms, function(st){
        prop.elements.filter('[' + prop.attr + '=' + st.search + ']').forEach(function(ele){
            ele.css(prop.cssAttr, st.val);
        });
    });
};

var _transform_mapping = function(prop){
    App.views.graph.applyTransform(prop.group, prop.attr, prop.cssAttr, prop.min, prop.max, prop.mint, prop.maxt);
};

//Public members
var PropertySetter = function(){};

PropertySetter.set = function(prop){
    _propertyTable[prop.porperty] = prop;
    
    if(prop.mapping === 'direct'){
        _direct_mapping(prop);
    }else if(prop.mapping === 'discrete'){
        _discrete_mapping(prop);
    }else if(prop.mapping === 'transform'){
        _transform_mapping(prop);
    }
    return PropertySetter;
};

PropertySetter.get = function(propName){
    return propertyTable[propName];
};

PropertySetter.clear = function(){
    _propertyTable = {};
    return PropertySetter;
};

module.exports = PropertySetter;