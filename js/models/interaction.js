module.exports = Backbone.Model.extend({
    defaults : {
        source : '',
        target: '',
        detMethods: [],
        firstAuthor: [],
        publications: [],
        intTypes: [],
        sourceDbs: [],
        intIds : [],
        scores: []
    }
});