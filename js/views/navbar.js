var templates = require('../templates');

var _pathwayId = _.uniqueId('pathway_'), _settingsId = _.uniqueId('settings_'), _findId = _.uniqueId('find_'), _saveId = _.uniqueId('save_'), _importId = _.uniqueId('import_'), _layoutId = _.uniqueId('layout_');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        
        this.events['click #' + _pathwayId ] = 'onPathwayClick';
        this.events['click #' + _settingsId ] = 'onSettingsClick';
        this.events['keyup #' + _findId ] = 'onFind';
        this.events['click #' + _saveId] = 'onSave';
        this.events['click #' + _importId] = 'onImport';
        this.events['click #' + _layoutId + ' a'] = 'onLayout';
    },
    
    events: {},
    
    render: function(){
        
        var tpl = templates.navbar({
            importId : _importId,
            pathwayId : _pathwayId,
            settingsId : _settingsId,
            findId : _findId,
            saveId : _saveId,
            layoutId:_layoutId
        
        });
        $(this.options.el).append(tpl);
    },
    
    onPathwayClick : function(e){
        e.stopPropagation();
        e.preventDefault();
        
        console.warn('TODO: PathwayClicked');
        Backbone.trigger('pathway');
    },
    
    onSave : function(e){
        e.stopPropagation();
        e.preventDefault();
        
        Backbone.trigger('save');
    },
    
    onSettingsClick : function(e){
        e.stopPropagation();
        e.preventDefault();
        App.views.side.tooglevisible();
    },
    
    onFind : function(e){
        var searchTerm = $('#' + _findId).val();
        App.views.graph.find(searchTerm);
    },
    
    onImport: function(e){
        e.stopPropagation();
        e.preventDefault();
        
        App.views.import.render();
    },
    
    onLayout: function(e){
        e.preventDefault();
        
        var layout = $(e.target).text().toLowerCase();
        
        if(layout !== 'advanced'){
            App.views.graph.layout({name:layout});
        }else{
            console.log("TODO: layout dialog!");
        }
    }
});