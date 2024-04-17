/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let count = 0
    nums.forEach((num, index) => {
        let searchArray = nums.slice((index + 1))
        let result = searchArray.filter(item => item === num)
        count += result.length
    })
    return count
};

// var numIdenticalPairs = function (nums) {
//     let result = 0;
//     for (let i = 0; i <= nums.length; i++) {
//         for (let j = 0; j <= nums.length; j++) {
//             if (nums[i] === nums[j] && i != j)
//                 result++
//         }
//     }

//     return result / 2
// };