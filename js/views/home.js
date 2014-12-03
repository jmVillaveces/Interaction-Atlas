var templates = require('../templates');
var Progressbar = require('./progressbar');

var progressBar = null;
var clazz = 'alert-info';
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
        
        this.query = $('#query');
        
        //Set focus on query
        this.query.focus();
        
        //Hide msg
        $('#msg').hide();
        
        //Init progress bar hidden
        $('#loading').hide();
        progressBar = new Progressbar({el:'#loading'});
        progressBar.render();
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
        
        $('#loading').show();
        $('#search').hide();
        
        // trigger search event
        iAtlas.vent.trigger('search', this.query.val(), $('#expand').prop("checked"));
    },
    
    update : function(n){
        progressBar.update(n);
    },
    
    alert : function(msg, type){
        var el = $('#msg').html(msg).show();
        
        if(type && type !== clazz){
            el.toggleClass(clazz +' '+ type);
            clazz = type;
        }
    },
    
    showSearch : function(){
        $('#loading').hide();
        $('#search').show();
    }
});