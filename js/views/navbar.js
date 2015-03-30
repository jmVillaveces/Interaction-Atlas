var templates = require('../templates');

var _searchTagsId = _.uniqueId('refresh_'), _formId = _.uniqueId('forms_'), _pathwayId = _.uniqueId('pathway_'), _settingsId = _.uniqueId('settings_'), _findId = _.uniqueId('find_'), _saveId = _.uniqueId('save_'), _tagId = _.uniqueId('tag_');

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        
        // Update tags when model changes
        this.listenTo(Backbone, 'ids_changed', this.setTags);
        
        //Events
        this.events['click #' +_searchTagsId +' a'] = 'removeTag';
        this.events['submit #' + _formId ] = 'onSubmit';
        this.events['click #' + _pathwayId ] = 'onPathwayClick';
        this.events['click #' + _settingsId ] = 'onSettingsClick';
        this.events['keyup #' + _findId ] = 'onFind';
        this.events['click #' + _saveId] = 'onSave';
    },
    
    events: {
        'hidden.bs.dropdown .dropdown' : 'onSearchHidden',
    },
    
    render: function(){
        
        var tpl = templates.navbar({
            searchTagsId : _searchTagsId,
            formId : _formId,
            pathwayId : _pathwayId,
            settingsId : _settingsId,
            findId : _findId,
            saveId : _saveId,
            tagId : _tagId
        
        });
        $(this.options.el).append(tpl);
    },
    
    setTags: function(tags){

        var str = '';
        _.each(tags, function(tag){
            str += '<span class="label label-success">'+tag+' <a href="#" style>x</a></span>';
        });
        
        $('#' + _searchTagsId).append(str);
    },
    
    removeTag : function(e){
        e.stopPropagation();
        e.preventDefault();
        $(e.target.parentNode).remove();
    },
    
    onSubmit : function(e){
        e.stopPropagation();
        e.preventDefault();
        
        var val = $('#' + _tagId).val();
        if(val.length > 0) this.addTag([val]);
        $('#' + _tagId).val('');
    },
    
    onSearchHidden : function(e){
        
        var tags = $('#' + _searchTagsId + ' span').text().split(' x');
        tags.pop();
        
        window.location = '#/id/'+tags.join(',');
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
    }
});