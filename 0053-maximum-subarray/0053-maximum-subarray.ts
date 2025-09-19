function maxSubArray(nums: number[]): number {
    let result: number = nums[0]
    let maxEnding: number = nums[0]
    for (let i = 1; i < nums.length; i++) {
        maxEnding = Math.max(maxEnding + nums[i], nums[i])
        result = Math.max(result, maxEnding)

    }
    return result
};
// let result = nums[0];
// for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < nums.length; j++) {
//         currentSum += nums[j];
//         result = Math.max(result, currentSum);
//     }
// }
// return result;