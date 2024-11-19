function twoSum(nums: number[], target: number): number[] {
    const myMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (myMap.hasOwnProperty(complement)) {
            return [myMap[complement], i]
        }
        myMap[nums[i]] = i
    }
};

/*
 const map: { [key: number]: number } = {}; // Hash map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Compute complement

        // Check if the complement exists in the hash map
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i]; // Return the indices
        }

        // Add current number to the hash map
        map[nums[i]] = i;
    }
    throw new Error("No solution found");
    */

/** JavaScript *********
function twoSum(nums, target) {
    const map = {}; // Hash map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Compute complement

        // Check if the complement exists in the hash map
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i]; // Return the indices
        }

        // Add current number to the hash map
        map[nums[i]] = i;
    }

    // In case no solution is found (though problem guarantees one solution)
    throw new Error("No solution found");
}

// Example Usage
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]


 */