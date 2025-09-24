/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {

    const n = nums.length;
    if (n <= 1) return;
    // Effective rotations if k ≥ n
    k = k % n;
    if (k === 0) return;


    function reverse(strIndex, endIndex) {
        while (endIndex > strIndex) {
            let strVal = nums[strIndex];
            let endVal = nums[endIndex];
            nums[strIndex] = endVal;
            nums[endIndex] = strVal;
            strIndex++;
            endIndex--;
        }
    }

    reverse(0, nums.length - 1)
    // console.log(nums)
    reverse(0, k-1)
    // console.log(nums)
    reverse(k, nums.length - 1)
    // console.log(nums)

}
/*
[1,2,3,4,5,6,7] , k =3
[7,6,5,4,3,2,1]
[5,6,7,4,3,2,1]
[5,6,7,1,2,3,4]
*/