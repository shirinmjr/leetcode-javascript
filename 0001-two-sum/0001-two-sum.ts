function twoSum(nums: number[], target: number): number[] {
    let myMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (myMap.has(complement)) {//O(1)
            return [myMap.get(complement), i];
        }
        myMap.set(nums[i], i);
    }
    return []
};