var templates = require('../templates');

var _dialId = _.uniqueId('dial_'), _okBtnId = _.uniqueId('ok_');

var data = {};

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        
        this.events['click #' + _okBtnId ] = 'onOkButton';
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
        
        this.cssAttr = render.control.prop('name');
        
        this.elements = render.elements;
        this.group = render.group;
 
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
            properties : render.properties,
            transform : (this.control.tag === 'INPUT'),
            control : this.control
        }));
        
        if(this.control.color) $('.transform .minicolors-input').minicolors({ theme:'bootstrap'});
        
        this.renderContent(render.properties[0]);
    },
    
    renderContent : function(prop){
        
        var values = _.uniq(_.map(this.elements, function(e){
            var val = e.data(prop);
            return _.isArray(val) ? _.sortBy(val, function(e){ return e; }).join(',') : val;
        }));
        
        $('#discrete').html(templates.discreteTable({
            property : prop, 
            control : this.control,
            values : values
        }));
        
        if(this.control.color) $('#discrete .minicolors-input').minicolors({ theme:'bootstrap'});
    },
    
    setTransform : function(mapping){
        
        if(mapping === 'transform'){
            var attr = $('select[name=attrs]').val();
            var min = this.elements.min(function(e){
                return e.data(attr);
            });

            var max = this.elements.max(function(e){
                return e.data(attr);
            });
            
            this.transform = {
                min : min,
                max : max
            };
            
            if(_.isNumber(min.value) && _.isFinite(min.value) && _.isNumber(max.value) && _.isFinite(max.value)){
                $('.log').hide();
                $('.transform').show();
                this.transform.able = true;
            }else{
                $('.log').show();
                $('.transform').hide();
                this.transform.able = false;
            }
            
        }else{
            $('.log').hide();
            $('.transform').hide();
        }
    },
    
    onMappingChange : function(e){
        var mapping = $(e.target).val();
        
        this.setTransform(mapping);
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
        this.setTransform($('select[name=mappings]').val());
    },
    
    onOkButton : function(e){
        var attr = $('select[name=attrs]').val(), mapping = $('select[name=mappings]').val();
        
        var elements = this.elements, cssAttr = this.cssAttr;
        if(mapping === 'direct'){
            App.views.graph.cy.batch(function(){
                elements.filter('[' + attr + ']').forEach(function(ele){
                    ele.css(cssAttr, ele.data(attr));
                });
            });
        }else if(mapping === 'discrete'){
            App.views.graph.cy.batch(function(){
                _.each($('#discrete input'), function(i){
                    elements.filter('[' + attr + '="' + $(i).prop('name') + '"]').forEach(function(ele){
                        ele.css(cssAttr, $(i).val());
                    });
                });
            });
        }else if(mapping === 'transform' && this.transform.able){
            App.views.graph.applyTransform(this.group, attr, cssAttr, this.transform.min.value, this.transform.max.value, $('input[name=min]').val(), $('input[name=max]').val());
        }
        
        $('#' + _dialId).modal('hide');
    }
});