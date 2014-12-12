module.exports = Backbone.Model.extend({
    defaults: {
        accession : [],
        name : '',
        fullName : '',
        shortName : '',
        lineage : [],
        comment : {}
        
    },
    urlRoot: function() {
        return  'http://www.uniprot.org/uniprot/';
    },
    url: function() {
        return this.urlRoot() + this.attributes.id + '.xml';
    },
    parse: function(response, xhr) {
        
        var xml = $(response);
        
        //Lineage
        var lineage = [];
        xml.find('taxon').each(function(i, v){
            lineage.push($(v).text());    
        });
        
        //Accession
        var accession = [];
        xml.find('accession').each(function(i, v){
            accession.push($(v).text());  
        });
        
        //Comment
        var comment = {};
        xml.find('comment').each(function(i, v){
            var type = $(this).attr('type');
            var children = $(this).children('text');
            
            if(children.length > 0){
                comment[type] = (comment[type]) ? comment[type] : [];
                comment[type].push(children.text());
            }
            
        });
        console.log(comment);
        
        //Names
        var fullName = xml.find('fullName').text();
        var shortName = xml.find('shortName').text();
        
        return {
            lineage : lineage,
            fullName : fullName,
            shortName : shortName,
            accession : accession,
            comment : comment
        };
    }
});