var templates = require('../templates');

module.exports = Backbone.View.extend({

    initialize: function(options){
        this.options = options;
        $(this.options.el).html('<p class="logger"></p>').hide();
    },
    
    error: function(msg){
        $(this.options.el + ' p').removeClass('bg-info bg-success bg-warning').addClass('bg-danger').html(msg).show();
    },
    
    info: function(msg){
        $(this.options.el + ' p').removeClass('bg-danger bg-success bg-warning').addClass('bg-info').html(msg).show();
    },
    
    success: function(msg){
        $(this.options.el + ' p').removeClass('bg-info bg-danger bg-warning').addClass('bg-success').html(msg).show();
    },
    
    warning: function(msg){
        $(this.options.el + ' p').removeClass('bg-info bg-success bg-danger').addClass('bg-warning').html(msg).show();
    }
});