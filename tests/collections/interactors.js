jQuery = require('jquery');
Backbone = require('backbone');
Backbone.$ = jQuery;

var assert = require('chai').assert;
var Interactors = require('../../js/collections/interactors.js');

describe('interactor.js spec', function () {
    var interactors;
});

describe('when constructing', function () {
    describe('just empty', function () {
        beforeEach(function () {
            interactors = new Interactors();
        });

        it('should be created', function () {
            assert.isDefined(interactors);
        });
    });
});

describe('with objects', function () {
    beforeEach(function () {
        var models = [
            {id: 'idOne', ids: ['ids1', 'ids2'], altIds: ['altIds1', 'altIds2'], taxonomy: ['9606']},
            {id: 'idTwo', ids: ['ids1', 'ids2'], altIds: ['altIds1', 'altIds2'], taxonomy: ['9606']},
        ];
        interactors = new Interactors(models);
    });

    it('should be lenght of 2', function () {
        assert.equal(2, interactors.length);
    });

    it('should contain models inside', function () {
        assert.isDefined(interactors.models);
    });
});