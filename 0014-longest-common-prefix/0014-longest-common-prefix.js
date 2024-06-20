/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.elngth === 0) return ""
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1); // Reduce the prefix until it matches
            if (prefix === "") return ""; // If prefix becomes empty, return immediately
        }
    }
        return prefix;

};