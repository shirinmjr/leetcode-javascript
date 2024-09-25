function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let uniqueIndex = 1;

    for (let i = 0; i < nums.length -1; i++) {
        // Only move forward if we find a new unique number
        if (nums[i] !== nums[i+1]) {
          
            nums[uniqueIndex] = nums[i+1];
              uniqueIndex++;
            
        }
    }

    // The number of unique elements will be uniqueIndex + 1
    return uniqueIndex ;
};