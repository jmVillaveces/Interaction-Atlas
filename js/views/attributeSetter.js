var templates = require('../templates');

var _dialId = _.uniqueId('dial_'), _okBtnId = _.uniqueId('ok_');

var data = {};

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
    },
    
    events : {
        'change select[name=mappings]' : 'onMappingChange',
        'change select[name=attrs]' : 'onAttrsChange'
    },
    
    render: function(render){
        
        this.control = {};
        this.control.attributes = {};
        this.control.tag = render.control.prop('tagName');
        this.control.color = render.control.hasClass('minicolors-input');
        
        this.elements = render.elements;
 
        if(this.control.tag === 'INPUT'){
            
            if(render.control.hasClass('minicolors-input')){
                this.control.attributes.value = render.control.val();
            }else{
                var props = ['min', 'max', 'step','value', 'type'];
                _.each(props, function(p){
                    this.attributes[p] = render.control.prop(p);
                }, this.control);
            }
        }else{
            var attributes = this.control.attributes;
            render.control.children().each(function(){
                var opt = $(this);
                attributes[opt.val()] = opt.text();
            });
        }
        
        var options = {
            title : render.attributeName, 
            icon : 'glyphicon-cog', 
            okBtn : 'Ok', 
            okBtnIcon : 'glyphicon-ok',
            dialId : _dialId,
            okBtnId : _okBtnId
        };
        
        var tpl = templates.dialog(options);    
        
        $(this.options.el).html(tpl);
        $('#' + _dialId).modal('show');
        
        $('#' + _dialId + ' .modal-body').html(templates.attributeSetter({ 
            properties : render.properties
        }));
        
        this.renderContent(render.properties[0]);
    },
    
    renderContent : function(prop){
        
        var values = _.uniq(_.map(this.elements, function(e){
            var val = e.data(prop);
            return _.isArray(val) ? _.sortBy(val, function(e){ return e; }).join(',') : val;
        }));
        
        console.log(values);
        $('#discrete').html(templates.discreteTable({
            property : prop, 
            control : this.control,
            values : values
        }));
        
        if(this.control.color) $('#discrete .minicolors-input').minicolors({ theme:'bootstrap'});
    },
    
    onMappingChange : function(e){
        var mapping = $(e.target).val();
        
        if(mapping === 'direct'){
            $('#discrete').hide();
        }else if (mapping === 'transform'){
            $('#discrete').hide();
        }else if(mapping === 'discrete'){
            $('#discrete').show();
        }
    },
    
    onAttrsChange : function(e){
        this.renderContent($(e.target).val());
        $('#discrete').show();
    }
});