var templates = require('../templates');

var _dialId = _.uniqueId('dial_'), _exampleId = _.uniqueId('example_'), _okBtnId = _.uniqueId('ok_'), _logId = _.uniqueId('log_');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        
        this.events['click #' + _exampleId ] = 'onExampleClick';
        this.events['click input[name=queryType]'] = 'onQueryTypeClick';
        this.events['click #' + _okBtnId ] = 'onOkButton';
    },
    
    events : {},
    
    render: function(){
        
        if ($('#' + _dialId).length){
            $('#' + _dialId).modal('show');
            return;
        }
        
        var options = {
            title : 'Import Network', 
            icon : 'glyphicon-import', 
            okBtn : 'Update', 
            okBtnIcon : 'glyphicon-refresh',
            dialId : _dialId,
            okBtnId : _okBtnId
        };
        
        var tpl = templates.dialog(options);    
        
        $(this.options.el).append(tpl);
        $('#' + _dialId).modal('show');
        
        tpl = templates.import({servers:App.model.servers.toJSON(), exampleId : _exampleId, logId : _logId});
        $('.modal-body').html(tpl);
    },

    onExampleClick : function(e){
        e.stopPropagation();
        e.preventDefault();
        
        var val = $('input[name=queryType]:checked').val();
        
        if(val === 'ids'){
             $('textarea[name=query]').val(App.model.attributes.exampleIds.join(','));
        }else {
             $('textarea[name=query]').val(App.model.attributes.exampleQuery);
        }
    },
    
    onQueryTypeClick :function(e){
        
        var val = $('input[name=queryType]:checked').val();
        
        if(val === 'ids'){
            $('select[name=org]').prop('disabled', false);
            $('textarea[name=query]').prop('placeholder', 'Comma separated list of identifiers');
        }else{
            $('select[name=org]').prop('disabled', true);
            $('textarea[name=query]').prop('placeholder', 'A valid MIQL query');
        }
    },
    
    onOkButton : function(e){
        
        var db = $('select[name=db]').val();
        var qType = $('input[name=queryType]:checked').val();
        var query = $('textarea[name=query]').val();
        var orgs = $('select[name=org]').val();
        
        var logger = $('#'+_logId);
        if(query.length){
            
            logger.html('<p class="text-info"> Fetching interactions from ' + db + '</p>');
            
            var model = App.model;
            model.attributes.server = db;
            
            if(qType === 'ids'){
                model.attributes.ids = query.split(',');
                model.attributes.query = '';
                model.attributes.orgs = (orgs[0].length) ? orgs : [];
            }else {
                model.attributes.ids = [];
                model.attributes.query = query;
                model.attributes.orgs = [];
            }
            
            
            model.fetch({
                error: function (errorResponse, a) {
                    console.error('Ajax Error, could not fetch interactions from', db);
                    logger.html('<p class="text-danger">Ajax Error, could not fetch interactions from ' + db + '</p>');
                }
            })
            .done(function(){
                if(App.model.get('interactions').length === 0){
                    logger.html('<p class="text-warning"> No interactions found </p>');
                }else{
                    $('#' + _dialId).modal('hide');
                    Backbone.trigger('got_data');
                }
            });
        }
        
        
        
    }
});