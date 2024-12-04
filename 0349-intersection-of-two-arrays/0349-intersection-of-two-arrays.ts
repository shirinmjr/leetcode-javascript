function intersection(nums1: number[], nums2: number[]): number[] {
    const mySet = new Set(nums1)
    const output = new Set<number>()
    for (const num of nums2) {
        if (mySet.has(num)) {
            output.add(num)
        }
    }
    return Array.from(output);
};