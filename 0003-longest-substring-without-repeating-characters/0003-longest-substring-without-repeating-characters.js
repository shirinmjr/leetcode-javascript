/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let windowStart = 0;
    const soFar = {};

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar = s[windowEnd];
        soFar[rightChar] = soFar[rightChar] + 1 || 1;

        while (soFar[rightChar] > 1) {
            let leftChar = s[windowStart];
            soFar[leftChar]--;
            if (soFar[leftChar] === 0) {
                delete soFar[leftChar];
            }
            windowStart++
        }

        maxLength = Math.max(maxLength, (windowEnd - windowStart) + 1)

    }
    return maxLength





};