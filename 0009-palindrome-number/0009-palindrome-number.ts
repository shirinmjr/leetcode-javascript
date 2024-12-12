function isPalindrome(x: number): boolean {
        let xString = x.toString();//turning the number to a String
    let xReverse = xString.split('').reverse().join('');//String => Array => reverse => join back as String
    return xString === xReverse //compaire two String
};