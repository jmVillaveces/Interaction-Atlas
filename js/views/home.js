var templates = require('../templates');
var $ = window.jQuery;

module.exports = Backbone.View.extend({
    
    initialize: function(options){
       this.options = options;
    },
    
    events:{
        'click #explink': 'example',
        'click #advlink': 'about',
        'click button' : 'search'
    },

    render: function(){
        var tpl = templates.home(this.options);
        $(this.options.el).html(tpl);
        
        this.query = $("#query");
        
        //Set focus on query
        this.query.focus();
    },
    
    example : function(){
        this.query.val("P49959,P25454,Q54KD8,O74773,Q8IV36,Q96B01,Q54CS9,P52701,Q9CXE6,Q7T6Y0,Q682D3");
        return false;
    },
    
    about : function(){
        console.log('TODO: implement about');
        return false;
    },
    
    search : function(e){
        e.preventDefault();
        console.log('TODO: implement search');
    }
    
});