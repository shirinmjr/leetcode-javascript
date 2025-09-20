function maxSubArray(nums: number[]): number {
    //(nums.length===0)
    let maxSum = nums[0]
    let result = nums[0]
    for (let i = 1; i < nums.length; i++) {
        maxSum = Math.max(nums[i], maxSum + nums[i])
        result = Math.max(result,maxSum)
    }


    return result

};