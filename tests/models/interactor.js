jQuery = require('jquery');
Backbone = require('backbone');
Backbone.$ = jQuery;

var assert = require('chai').assert;
var Interactor = require('../../js/models/interactor.js');

describe('interactor.js spec', function () {
    var interactor;
});

describe('when constructing', function () {
    describe('just empty', function () {
        beforeEach(function () {
            interactor = new Interactor({});
        });

        it('should be created', function () {
            assert.isDefined(interactor);
        });
    });
});

describe('with attributes', function () {
    beforeEach(function () {
        interactor = new Interactor({
            id : 'myId',
            ids : ['oneId', 'anotherId'],
            altIds : ['altId1', 'altId2'],
            taxonomy : ['9606']
        });
    });

    it('should have id "myId"', function () {
        assert.equal('myId', interactor.get('id'));
    });

    it('should have 2 ids', function () {
        assert.equal(2, interactor.get('ids').length);
    });
    
    it('should have 2 alternative ids', function () {
        assert.equal(2, interactor.get('altIds').length);
    });
    
    it('should have 1 taxonomy', function () {
        assert.equal(1, interactor.get('taxonomy').length);
    });
});