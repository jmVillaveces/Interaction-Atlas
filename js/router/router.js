module.exports = Backbone.Router.extend({
    routes: {
        '' : 'home',
        'id/:ids' : 'ids'
    },
    
    home : function(){
    },
    
    ids : function(ids){
        ids = ids.split(',');
        
        var diff = (App.model.get('ids').length > ids.length) ? _.difference(App.model.get('ids'), ids) : _.difference(ids, App.model.get('ids'));
        if(diff.length > 0){
        
            
            App.model.set('ids', ids);
            App.model.fetch({
                error: function (errorResponse, a) {
                    console.error('Ajax Error, could not fetch interactions from', App.model.attributes.psicquicServer);
                    App.views.logger.error('Ajax Error, could not fetch interactions from', App.model.attributes.psicquicServer);
                }
            })
            .done(function(){
                if(App.model.get('interactions').length === 0)
                    App.views.logger.info('No interactions found for identifier(s) <strong>' + ids.join(', ') + '</strong>');
                
                Backbone.trigger('got_data');
            });
        }
    }
    
});