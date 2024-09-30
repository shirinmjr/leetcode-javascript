function plusOne(digits: number[]): number[] {

    let increment = BigInt(digits.join("")) + BigInt(1)//To handle large integers
    let strArray = increment.toString().split("")
    return strArray.map(str => Number(str))

};
