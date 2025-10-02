function maxSubArray(nums: number[]): number {
    if (nums.length === 1) return nums[0]
    let curr_sum = 0;
    let max_sum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        curr_sum = Math.max(curr_sum + nums[i], nums[i]);
        if (curr_sum > max_sum) {
            max_sum = curr_sum;
        }
    }
    return max_sum;
};