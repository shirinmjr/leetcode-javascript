function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;//if nums is empty return 0

    let uniqueIndex = 1;//a placeholder showing where the next uniqueIndex goes
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {//since it's sorted we check agains the next item and if not equal it means it is unique
            nums[uniqueIndex] = nums[i + 1];//rewrite the original array, shift the array elements to where the next unique item should go
            uniqueIndex++;
        }
    }
    return uniqueIndex;
/* 
    let temp = [...new Set(nums)];
    nums.length = 0;
    nums.push(...temp);
    return nums.length;
*/
};