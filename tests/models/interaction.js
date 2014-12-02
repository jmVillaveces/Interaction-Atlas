jQuery = require('jquery');
Backbone = require('backbone');
Backbone.$ = jQuery;

var assert = require('chai').assert;
var Interaction = require('../../js/models/interaction.js');

describe('interaction.js spec', function () {
    var interaction;
});

describe('when constructing', function () {
    describe('just empty', function () {
        beforeEach(function () {
            interaction = new Interaction();
        });

        it('should be created', function () {
            assert.isDefined(interaction);
        });
    });
});

describe('with attributes', function () {
    beforeEach(function () {
        interaction = new Interaction({
            source: 'source',
            target: 'target',
            detMethods: ['meth1'],
            firstAuthor: ['john doe'],
            publications: ['pub1', 'pub2'],
            intTypes: ['type1', 'type2'],
            sourceDbs: ['intact', 'atlas'],
            intIds : ['ids1'],
            scores: ['score1']
        });
    });

    it('should have source "source"', function () {
        assert.equal('source', interaction.get('source'));
    });
    
    it('should have target "target"', function () {
        assert.equal('target', interaction.get('target'));
    });

    it('should have 1 detMethod', function () {
        assert.equal(1, interaction.get('detMethods').length);
    });
    
    it('should have 1 author', function () {
        assert.equal(1, interaction.get('firstAuthor').length);
    });
    
    it('should have 2 publications', function () {
        assert.equal(2, interaction.get('publications').length);
    });
    
    it('should have 2 publications', function () {
        assert.equal(2, interaction.get('publications').length);
    });
    
    it('should have 2 intTypes', function () {
        assert.equal(2, interaction.get('intTypes').length);
    });
    
    it('should have 2 sourceDbs', function () {
        assert.equal(2, interaction.get('sourceDbs').length);
    });
    
    it('should have 1 intId', function () {
        assert.equal(1, interaction.get('intIds').length);
    });
    
    it('should have 1 scores', function () {
        assert.equal(1, interaction.get('scores').length);
    });
});


/*source: nodeA.id,
            target: nodeB.id,
            detMethods: _.map(fields[6].split('|'), _mapField),
            firstAuthor: fields[7].split('|'),
            publications: _.map(fields[8].split('|'), _mapPub),
            intTypes: _.map(fields[11].split('|'), _mapField),
            sourceDbs: _.map(fields[12].split('|'), _mapField),
            intIds : _.map(fields[13].split('|'), _mapPub),
            scores: _.map(fields[14].split('|'), _mapScore)*/