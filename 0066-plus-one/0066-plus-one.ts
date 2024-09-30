function plusOne(digits: number[]): number[] {

    let str = digits.join("")
    let increment = BigInt(str) + BigInt(1)
    let strArray = increment.toString().split("")
    return strArray.map(str => Number(str))

};

plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])