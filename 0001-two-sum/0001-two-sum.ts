function twoSum(nums: number[], target: number): number[] {
    const myMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (myMap.has(complement)) {//o(n)
            return [myMap.get(complement), i];
        }
        myMap.set(nums[i], i);
    }
    return [];
};