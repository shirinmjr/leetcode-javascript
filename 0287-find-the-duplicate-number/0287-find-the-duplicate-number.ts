function findDuplicate(nums: number[]): number {
   // Step 1: Use Floyd's Tortoise and Hare to find the intersection point
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Step 2: Find the entrance to the cycle (duplicate number)
    slow = nums[0]; // Reset slow to the start
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow; // The duplicate number
}
 
