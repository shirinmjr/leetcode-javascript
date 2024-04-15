/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    products.sort()
    let option = ""
    const searchResult = []
    for (let i = 0; i < searchWord.length; i++) {
        option += searchWord[i]
        const suggested = products.filter(product => product.startsWith(option)).slice(0, 3)
        searchResult.push(suggested)
    }
    return searchResult
};