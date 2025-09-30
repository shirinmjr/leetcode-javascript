/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    nums1.sort((a, b) => a - b);



    // let i = m - 1; // Pointer for the last element in nums1's initial part
    // let j = n - 1; // Pointer for the last element in nums2
    // let k = m + n - 1; // Pointer for the last position in nums1

    //     while (i >= 0 && j >= 0) {
    //         if (nums1[i] > nums2[j]) {
    //             nums1[k] = nums1[i];
    //             i--;
    //         } else {
    //             nums1[k] = nums2[j];
    //             j--;

    //         }
    //         k--;
    //     }
    //     while (j >= 0) {
    //         nums1[k] = nums2[j];
    //         j--;
    //         k--;
    //     }
};
