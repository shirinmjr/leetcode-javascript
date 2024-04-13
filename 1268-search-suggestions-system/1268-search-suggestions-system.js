/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();
  const result = [];
  let prefix = '';
  for (let i = 0; i < searchWord.length; i++) {
    prefix += searchWord[i]
    const suggested = products.filter(product => product.startsWith(prefix)).slice(0, 3);
    result.push(suggested);
  }
  return result;
};
