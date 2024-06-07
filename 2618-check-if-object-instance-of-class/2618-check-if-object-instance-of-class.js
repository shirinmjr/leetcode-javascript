/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {

    if (obj === undefined || obj === null || typeof classFunction !== 'function') {
        return false;
    }

    // Check for primitive types
    const primitiveConstructors = {
        'string': String,
        'number': Number,
        'boolean': Boolean,
        'symbol': Symbol,
        'bigint': BigInt
    };
   if ( typeof obj !== 'object' && classFunction === Object) {
        return true;
    }

    if (primitiveConstructors[typeof obj] === classFunction) {
        return true;
    }

    return obj instanceof classFunction;
};