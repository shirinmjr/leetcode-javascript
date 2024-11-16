function longestPalindrome(s: string): string {
    let longestPalindrom = "";
    let left = 0
    let right = 0
    for (let i = 0; i < s.length; i++) {
        let evenPalindrom = checkSourranding(s, i, i);
        let oddPalindrom = checkSourranding(s, i, i + 1);
        // Update longest palindrome if needed
        if (oddPalindrom.length > longestPalindrom.length) {
            longestPalindrom = oddPalindrom;
        }
        if (evenPalindrom.length > longestPalindrom.length) {
            longestPalindrom = evenPalindrom;
        }
    }
    return longestPalindrom;

};
const checkSourranding = (s, left, right) => {
    let l = left
    let r = right
    while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
        l--;
        r++;
    }
    return s.substring(l + 1, r)
}