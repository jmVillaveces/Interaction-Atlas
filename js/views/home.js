var Typeahead = require('typeahead');
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
        this.query.tagsInput({
            width:'auto',
            height:'49px',
            defaultText:'ids...'
        }); // init tags
        
        var qInput = $('#query_tag');
        //set tags
        var ta = Typeahead(qInput.get(0), {
            source: function(query, result) {
                
                if(query.length >= 3){
                    $.ajax({url: window.iAtlas.properties.autocomplete+query+'*', success: function(res){
                        res = res.split('\n');
                        
                        if(res.length > 0){
                            res.splice(0,1);
                            result(res);
                        }
                    }});
                }
            }
        });
            
        //Hide msg
        $('#msg').hide();
        
        //Init progress bar hidden
        $('#loading').hide();
        progressBar = new Progressbar({el:'#loading'});
        progressBar.render();
        
        
    },
    
    example : function(){
        this.query.importTags(this.options.example);
        return false;
    },
    
    about : function(){
        console.log('TODO: implement about');
        return false;
    },
    
    search : function(e){
        e.preventDefault();
        
        if(this.query.val().length === 0) {
            this.alert('<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Please add protein identifiers or click example', 'alert-info'); 
            return;
        }
        
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