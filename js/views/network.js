var Typeahead = require('typeahead');
var templates = require('../templates');
var vis = require('../vis/visualization');

var data = {};

module.exports = Backbone.View.extend({
    
    initialize: function(options){
        this.options = options;
        data = options.data;
    },
    
    render: function(){
        var tpl = templates.network();
        $(this.options.el).html(tpl);
        this.network = vis.data(data).selector('#network').update();
        
        //Init searchBox
        this.query = $('#search');
        this.query.tagsInput({
            width:'auto',
            height:'49px',
            defaultText:'ids...',
            onAddTag : this.addTag,
            onRemoveTag : this.removeTag,
        }); // init tags
        
        var qInput = $('#search_tag');
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
        
        this.query.importTags(data.attributes.query);

    },
    
    setLayout : function(l){
        this.network.layout(l).update();
    },
    
    setData : function(_){
        this.data = _;
    },
    
    update : function(){
        vis.data(this.data).update();
    },
    
    addTag : function(tag){
        console.log(arguments);
    },
    
    removeTag : function(tag){
        data.get('interactors').each(function(n){
            if(n.id === tag) n.set('inQuery', false);
        });
        vis.data(data).update();
    }
});