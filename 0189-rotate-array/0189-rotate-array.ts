/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k % nums.length; // Handle cases where k > nums.length
    const lastK = nums.slice(-k); // Step 1: Extract the last k elements

    // Step 2: Shift the remaining elements
    for (let i = nums.length - 1; i >= k; i--) {
        nums[i] = nums[i - k];
    }

    // Step 3: Place the extracted last k elements at the beginning
    for (let i = 0; i < k; i++) {
        nums[i] = lastK[i];
    }

    /*
        for (let i = 0; i < k; i++) {
            const temp = nums.pop()
            nums.unshift(temp)
        }
    */
};