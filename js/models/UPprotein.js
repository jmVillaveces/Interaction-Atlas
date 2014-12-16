module.exports = Backbone.Model.extend({
    defaults: {
        accession : [],
        name : '',
        fullName : '',
        shortName : '',
        lineage : [],
        comment : {},
        sequence : '',
        features : [],
        keyword : [],
        GO : []
        
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
        
        //GO
        var GO = [];
        xml.find('dbReference').each(function(i, v){
            var type = $(this).attr('type');
            if(type == 'GO'){
                var go = { id : $(this).attr('id')};
                
                $(this).find('property').each(function(i, v){
                    go[$(this).attr('type')] = $(this).attr('value');
                });
                GO.push(go);
            }
        });
        
        //Feature
        var features = [];
        xml.find('feature').each(function(i, v){
            var feat = {
                type : $(this).attr('type'),
                description : $(this).attr('description'),
                original : $(this).find('original').text(),
                variation : $(this).find('variation').text(),
                start : $(this).find('begin').attr('position') || $(this).find('position').attr('position'),
                end : $(this).find('end').attr('position') || $(this).find('position').attr('position'),
            };
            features.push(feat);
        });
        
        //Keyword
        var keyword = []; 
        xml.find('keyword').each(function(i, v){
            keyword.push($(v).text());
        });
        
        //Sequence
        var sequence = xml.find('sequence').text().replace(/(\r\n|\n|\r)/gm, '');
        
        //Names
        var fullName = xml.find('fullName').text();
        var shortName = xml.find('shortName').text();
        
        return {
            lineage : lineage,
            fullName : fullName,
            shortName : shortName,
            accession : accession,
            comment : comment,
            sequence : sequence,
            features : features,
            keyword : keyword,
            GO : GO
        };
    }
});