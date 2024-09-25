function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let uniqueIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        // Only move forward if we find a new unique number
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }

    // The number of unique elements will be uniqueIndex + 1
    return uniqueIndex + 1;
};