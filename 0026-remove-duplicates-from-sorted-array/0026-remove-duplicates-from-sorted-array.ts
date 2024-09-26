function removeDuplicates(nums: number[]): number {
 
    let temp = [...new Set(nums)];
    nums.length = 0;
    nums.push(...temp);
    return nums.length;
 
 
    // if (nums.length === 0) return 0;
    // let uniqueIndex = 1;
    // for (let i = 0; i < nums.length - 1; i++) {
    //     if (nums[i] !== nums[i + 1]) {
    //         nums[uniqueIndex] = nums[i + 1];
    //         uniqueIndex++;
    //     }
    // }
    // return uniqueIndex;
};