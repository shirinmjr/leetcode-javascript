/**
 Do not return anything, modify nums1 in-place instead.
Use three pointers:

i → last valid element in nums1 (index m - 1)

j → last element in nums2 (index n - 1)

k → last position in nums1 (index m + n - 1)

Compare from the end to avoid overwriting elements in nums1.
At each step, place the larger of nums1[i] and nums2[j] into nums1[k], then move that pointer and k left.

When one array is exhausted:

If nums2 still has elements, copy them into nums1 (while j >= 0).

If nums1 has leftovers, they’re already in place.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1

    while (i >= 0 && j >= 0) {
        if (nums2[j] > nums1[i]) {
            nums1[k--] = nums2[j--];
        } else {
            nums1[k--] = nums1[i--];
        }
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--]
    }
    // for (let i = 0; i < n; i++) {
    //     nums1[m + i] = nums2[i];
    // }
    // nums1.sort((a, b) => a - b);
};
