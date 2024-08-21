function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let nums: number[] = [];

    const merge = (arr1: number[], arr2: number[]): number[] => {
        while (arr1.length && arr2.length) {
            if (arr1[0] < arr2[0]) {
                nums.push(arr1.shift());
            } else {
                nums.push(arr2.shift());
            }
        }

        nums = [...nums, ...arr1, ...arr2];
        return nums;
    }

    merge(nums1, nums2);
console.log(nums)
    if (nums.length % 2 == 1) return nums[Math.floor(nums.length / 2)];

    else {

  console.log(nums[(nums.length /2)-1],nums[(nums.length /2)])

        return  (nums[(nums.length /2)-1] + nums[(nums.length /2) ])/2;
    }
};