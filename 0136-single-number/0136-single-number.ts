function singleNumber(nums: number[]): number {
    const map = new Map<number, number>()

    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num)! + 1);
        } else {
            map.set(num, 1)
        }
    }
    for (const [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }
    return -1;
};
/*
function singleNumber(nums: number[]): number {
    return nums.reduce((prev, val) => prev ^ val, 0)
};
*/