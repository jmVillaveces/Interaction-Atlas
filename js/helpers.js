// helpers.js
(function(Handlebars) {

    //Join array
    Handlebars.registerHelper( 'join', function( array, sep, options ) {
        return array.map(function( item ) {
            return options.fn( item );
        }).join( sep );
    });
    
    //round numbers
    Handlebars.registerHelper('toFixed', function (value, digits, options) {
        digits = (digits) ? digits : 3;
        return value.toFixed(digits);
    });
    
    //Comparator
    Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {
        
        var operators, result;

        if (arguments.length < 3) {
            throw new Error('Handlerbars Helper \'compare\' needs 2 parameters');
        }

        if (options === undefined) {
            options = rvalue;
            rvalue = operator;
            operator = "===";
        }

        operators = {
            '==': function (l, r) { return l == r; },
            '===': function (l, r) { return l === r; },
            '!=': function (l, r) { return l != r; },
            '!==': function (l, r) { return l !== r; },
            '<': function (l, r) { return l < r; },
            '>': function (l, r) { return l > r; },
            '<=': function (l, r) { return l <= r; },
            '>=': function (l, r) { return l >= r; },
            'typeof': function (l, r) { return typeof l == r; }
        };

        if (!operators[operator]) {
            throw new Error('Handlerbars Helper \'compare\' doesn\'t know the operator ' + operator);
        }

        result = operators[operator](lvalue, rvalue);

        if (result) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });
    
    
}(Handlebars));