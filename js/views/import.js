var templates = require('../templates');
var fileReader = require('../services/fileReader');

var _dialId = _.uniqueId('dial_'), _exampleId = _.uniqueId('example_'), _okBtnId = _.uniqueId('ok_'), _logId = _.uniqueId('log_'),  _dbId = _.uniqueId('db_'),  _fileId = _.uniqueId('file_');

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
            loading : 'Loading ...',
            dialId : _dialId,
            okBtnId : _okBtnId
        };
        
        var tpl = templates.dialog(options);    
        
        $(this.options.el).append(tpl);
        $('#' + _dialId).modal('show');
        
        var isFileSupported = (window.File && window.FileReader && window.FileList && window.Blob) ? true : false;
        tpl = templates.import({servers:App.model.servers.toJSON(), exampleId : _exampleId, logId : _logId, isFileSupported: isFileSupported, fileId : _fileId, dbId : _dbId});
        $('#' + _dialId + ' .modal-body').html(tpl);
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
        
        var $btn = $(e.target).button('loading');
        
        var active = $('#'+_dialId).find('.tab-pane.active').attr('id');
        var logger = $('#'+_logId);
        
        if(active === _dbId){
        
            var db = $('select[name=db]').val();
            var qType = $('input[name=queryType]:checked').val();
            var query = $('textarea[name=query]').val();
            var orgs = $('select[name=org]').val();

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
                        $btn.button('reset');
                    }
                })
                .done(function(){
                    if(App.model.get('interactions').length === 0){
                        logger.html('<p class="text-warning"> No interactions found </p>');
                        $btn.button('reset');
                    }else{
                        $('#' + _dialId).modal('hide');
                        logger.html('');
                        $btn.button('reset');
                        Backbone.trigger('got_data');
                    }
                });
            }
        }else{
            var nodesfile = document.getElementById('nodes').files[0];
            var edgesfile = document.getElementById('interactions').files[0];
            
            if(!(nodesfile && edgesfile)){
                logger.html('<p class="text-danger">Please select the required files</p>');
                return;
            }
            
            fileReader.file(nodesfile).parseNodes(function(err, nodes){
                if(err){ 
                    console.warn(err);
                    logger.html('<p class="text-danger">' + err + '</p>');
                    return;
                }
                
                
                fileReader.file(edgesfile).parseEdges(function(err, edges){
                    if(err){ 
                        console.warn(err);
                        logger.html('<p class="text-danger">' + err + '</p>');
                        return;
                    }
                    
                    //TODO import network
                    var model = App.model;
                    model.attributes.interactors.set(nodes);
                    model.attributes.interactions.set(edges);
                    model.attributes.edgeAttributes = (edges.length) ? _.keys(edges[0]) : [];
                    model.attributes.nodeAttributes = (nodes.length) ? _.keys(nodes[0]) : [];
                    
                    $('#' + _dialId).modal('hide');
                    logger.html('');
                    $btn.button('reset');
                    Backbone.trigger('got_data');
                });
            });
        }
    }
});