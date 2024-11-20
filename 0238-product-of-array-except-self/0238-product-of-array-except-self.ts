function productExceptSelf(nums: number[]): number[] {
    // Step 1: Initialize variables
    const n = nums.length; // Length of the input array
    const myArray = new Array(n).fill(1); // Result array, initialized with 1

    // Step 2: Calculate prefix product and store it in myArray
    let prefix = 1; // Variable to keep track of the product of elements before the current index
    for (let i = 0; i < n; i++) {
        myArray[i] = prefix; // Store the product of all elements before index `i`
        prefix *= nums[i];  // Update prefix to include nums[i] for the next index
    }

    // Step 3: Calculate suffix product and update myArray
    let suffix = 1; // Variable to keep track of the product of elements after the current index
    for (let i = n - 1; i >= 0; i--) {
        myArray[i] *= suffix; // Combine the prefix and suffix products for index `i`
        suffix *= nums[i];   // Update suffix to include nums[i] for the next index
    }

    // Step 4: Return the result array
    return myArray;
}
