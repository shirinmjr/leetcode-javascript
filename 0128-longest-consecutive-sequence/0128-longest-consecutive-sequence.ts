function longestConsecutive(nums: number[]): number {
    // console.log(nums)
    if (nums.length === 0) return 0;
    nums.sort((a, b) => a - b);
    //console.log(nums)
    let countArray = [];
    let count = 1;
    for (let i = 1; i <= nums.length; i++) {
        if ((nums[i - 1] + 1) === nums[i]) {
            count++;
        } else if (nums[i - 1] === nums[i]) {
            continue;
        } else {
            countArray.push(count);
            count = 1;
        }

    }
    // console.log(countArray)
    return Math.max(...countArray);
};