/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
 // Edge case: if the array is empty, return an empty string
    if (strs.length === 0) {
        return "";
    }
    
    // Initialize prefix with the first string
    let prefix = strs[0];
    
    // Iterate through the array starting from the second string
    for (let i = 1; i < strs.length; i++) {
        // Check if prefix is a prefix of strs[i]
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten prefix from the end
            prefix = prefix.substring(0, prefix.length - 1);
            
            // If there's no common prefix at all
            if (prefix === "") {
                return "";
            }
        }
    }
    
    // After the loop completes, prefix contains the longest common prefix
    return prefix;
};