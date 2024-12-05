function reverse(x: number): number {
    const reversed = parseInt(Math.abs(x).toString().split("").reverse().join("")) * Math.sign(x);

    // Check for 32-bit signed integer range
    return (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) ? 0 : reversed;


/*
    const isNegative = x < 0; // Check if x is negative
    const numArray = Math.abs(x).toString().split("")// Work with absolute value
    numArray.reverse()
    const reversed = parseInt(numArray.join(""))
    const result = isNegative ? -reversed : reversed;

    //check if the reversed falls outside the valid range of a 32-bit signed integer.
    //it's 31 becuase 1 bit is used for sign
    if (result < -(2 ** 31) || result > (2 ** 31) - 1) return 0
    return result;
    */


};