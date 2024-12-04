function intersect(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, number>();
    const output: number[] = []
    // Count frequencies of elements in nums1
    for (const num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Find intersections with nums2
    for (const num of nums2) {
        if (map.has(num) && map.get(num)! > 0) {
            output.push(num); // Add the number to the result
            map.set(num, map.get(num)! - 1); // Decrement its count in the map
        }
    }



    return output
};