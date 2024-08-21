function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let nums: number[] = [];

        while (nums1.length && nums2.length) {//to combine two arrays
            if (nums1[0] < nums2[0]) { 
                nums.push(nums1.shift());
            } else {
                nums.push(nums2.shift()); 
            }
        }
        nums = [...nums, ...nums1, ...nums2];//combined array + what is left from the longer array

    if (nums.length % 2 == 1) return nums[Math.floor(nums.length / 2)];

    else return (nums[(nums.length / 2) - 1] + nums[(nums.length / 2)]) / 2;   
};