var templates = require('../templates');

var _dialId = _.uniqueId('dial_'), _okBtnId = _.uniqueId('ok_');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
    },
    
    render: function(render){
        
        render.dialId = _dialId;
        render.okBtnId = _okBtnId;
        
        var tpl = templates.dialog(render);    
        $(this.options.el).html(tpl);
        $('#' + _dialId).modal('show');
        
        if(_.isFunction(render.onOkBtn)){
            $('#' + _okBtnId).click(render.onOkBtn);
        }
    }
});