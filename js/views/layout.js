var templates = require('../templates');

var _dialId = _.uniqueId('dial_'), _okBtnId = _.uniqueId('ok_'), _formId = _.uniqueId('form_'), _layoutOptsId = _.uniqueId('opts_');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        
        //On ok button clicked
        this.events['click #' + _okBtnId ] = 'onOkButton';
    },
    
    events : {
        'change select[name=name]': 'onSelectChange'
    },
    
    render: function(){
        
        if ($('#' + _dialId).length){
            $('#' + _dialId).modal('show');
            return;
        }
        
        var options = {
            title : 'Layout', 
            icon : 'glyphicon-fullscreen', 
            okBtn : 'Update', 
            okBtnIcon : 'glyphicon-refresh',
            dialId : _dialId,
            okBtnId : _okBtnId
        };
        
        var tpl = templates.dialog(options);    
        
        $(this.options.el).append(tpl);
        
        tpl = templates.layout({formId:_formId, layoutOptsId:_layoutOptsId});
        $('#' + _dialId + ' .modal-body').html(tpl);
        
        this.setOptions('concentric');
        $('#' + _dialId).modal('show');
    },

    onSelectChange : function(e){
        var layoutName = $('select[name=name]').val().toLowerCase();
        this.setOptions(layoutName);
    },
    
    setOptions : function(name){
        var tpl = templates[name]();
        $('#'+_layoutOptsId).html(tpl);
        
        //Init tooltips
        $('[data-toggle="tooltip"]').tooltip();
    },
    
    onOkButton : function(e){
        App.views.graph.layout(this.serializeForm());
        $('#' + _dialId).modal('hide');
    },
        
    serializeForm : function(){
        var serial = _.object($('#'+_formId).serializeArray().map(function(v) {return [v.name, v.value];} ));
        
        var blacklist = [];
        _.each(serial, function(e,k){
            
            if(e === 'true'){ 
                serial[k] = true;
            }else if(e === 'false'){ 
                serial[k] = false;
            }else if(k !== 'name'){
                var i = parseInt(e);
                if(_.isNaN(i)){ 
                    blacklist.push(k);
                }else{
                    serial[k] = i;
                }
            }
        });
        
        serial = _.omit(serial, blacklist);
        return serial;
    }
});