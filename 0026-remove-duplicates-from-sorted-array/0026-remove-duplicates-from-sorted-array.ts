function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let unqueIndex = 1
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[unqueIndex] = nums[i + 1]
            unqueIndex++

        }
    }
    return unqueIndex

}
