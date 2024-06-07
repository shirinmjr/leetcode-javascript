/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {

    if (obj === undefined || obj === null || typeof classFunction !== 'function') {
        return false;
    }
console.log("type of",typeof obj)
    // Check for primitive types
    const primitiveConstructors = {
        'string': String,
        'number': Number,
        'boolean': Boolean,
        'symbol': Symbol,
        'bigint': BigInt
    };
   if (classFunction === Object && typeof obj !== 'object') {
        return true;
    }

    if (primitiveConstructors[typeof obj] === classFunction) {
        return true;
    }

    //     if (primitiveConstructors[typeof obj] === classFunction) {
    //     return true;
    // }
    return obj instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */