function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let uniqueIndex = 1;

            console.log("nums=",nums)

    for (let i = 0; i < nums.length - 1; i++) {
           if (nums[i] == nums[i + 1]) {
            console.log(nums[i])
           }
        if (nums[i] !== nums[i + 1]) {
            nums[uniqueIndex] = nums[i + 1];
            uniqueIndex++;

        }
    }
    return uniqueIndex;
};