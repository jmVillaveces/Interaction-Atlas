var templates = require('../templates');
var $ = jQuery;

module.exports = Backbone.View.extend({
    
    initialize: function(options){
       this.options = options;
    },
    
    events:{
        'click #explink': 'example',
        'click #advlink': 'about',
        'submit form' : 'search'
    },

    render: function(){
        var tpl = templates.home(this.options);
        $(this.options.el).html(tpl);
        
        this.query = $("#query");
        
        //Set focus on query
        this.query.focus();
    },
    
    example : function(){
        this.query.val(this.options.example);
        return false;
    },
    
    about : function(){
        console.log('TODO: implement about');
        return false;
    },
    
    search : function(e){
        e.preventDefault();
        
        // trigger search event
        iAtlas.vent.trigger('search', this.query.val(), $('#expand').prop("checked"));
    }
});