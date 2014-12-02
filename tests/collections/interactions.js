jQuery = require('jquery');
Backbone = require('backbone');
Backbone.$ = jQuery;

var assert = require('chai').assert;
var Interactions = require('../../js/collections/interactions.js');

describe('interactions.js spec', function () {
    var interactions;
});

describe('when constructing', function () {
    describe('just empty', function () {
        beforeEach(function () {
            interactions = new Interactions();
        });

        it('should be created', function () {
            assert.isDefined(interactions);
        });
    });
});

describe('with objects', function () {
    beforeEach(function () {
        var models = [
            {
                source: 'source',
                target: 'target',
                detMethods: ['meth1'],
                firstAuthor: ['john doe'],
                publications: ['pub1', 'pub2'],
                intTypes: ['type1', 'type2'],
                sourceDbs: ['intact', 'atlas'],
                intIds : ['ids1'],
                scores: ['score1']
            },
            {
                source: 'source2',
                target: 'target2',
                detMethods: ['meth1'],
                firstAuthor: ['john doe'],
                publications: ['pub1', 'pub2'],
                intTypes: ['type1', 'type2'],
                sourceDbs: ['intact', 'atlas'],
                intIds : ['ids1'],
                scores: ['score1']
            }
        ];
        interactions = new Interactions(models);
    });

    it('should be lenght of 2', function () {
        assert.equal(2, interactions.length);
    });

    it('should contain models inside', function () {
        assert.isDefined(interactions.models);
    });
});