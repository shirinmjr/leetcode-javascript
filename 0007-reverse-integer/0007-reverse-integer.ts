function reverse(x: number): number {
    const isNegative = x < 0; // Check if x is negative
    const numArray = Math.abs(x).toString().split("")// Work with absolute value
    numArray.reverse()
    const reversed = parseInt(numArray.join(""))
    const result = isNegative ? -reversed : reversed;

    //check if the reversed falls outside the valid range of a 32-bit signed integer.
    if (result < -(2 ** 31) || result > (2 ** 31)) return 0
        return result;
};