function plusOne(digits: number[]): number[] {

    let str = digits.join("")
    let increment = BigInt(str) + BigInt(1)
    let strArray = increment.toString().split("")
    return strArray.map(str => Number(str))

};
