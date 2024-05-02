/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let collection = nums.filter(num => nums.includes(-num))
    return collection.length > 0 ? Math.max(...collection) : -1
};