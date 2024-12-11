function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const numsMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i])) {//first condtion meets
            const lastIndex = numsMap.get(nums[i]);
            if (i - lastIndex <= k) {
                return true; // Found a duplicate within range k
            }
        }
        // Update the last-seen index for the current number
        numsMap.set(nums[i], i);
    }
    return false; // No duplicates found within range k

};