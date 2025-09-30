function twoSum(nums: number[], target: number): number[] {
    let myMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (myMap.has(complement)) {
            return [i, myMap.get(complement)]
        } else {
            //(value,index)
            myMap.set(nums[i], i)
        }
    }
    return []
};