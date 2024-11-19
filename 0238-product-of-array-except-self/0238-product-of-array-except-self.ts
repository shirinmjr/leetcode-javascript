function productExceptSelf(nums: number[]): number[] {

    let n = nums.length
    let myArray = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        myArray[i] = prefix; // Store the product of all elements before i
        prefix *= nums[i];  // Update prefix product
    }

    // Step 2: Calculate suffix product and update result
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        myArray[i] *= suffix; // Combine prefix and suffix products
        suffix *= nums[i];   // Update suffix product
    }




    return myArray


};

/*===== O(n^2)
function productExceptSelf(nums: number[]): number[] {
    let myArray = []
    for (let i = 0; i<nums.length ; i++) {
        let product = 1
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                product *= nums[j]
            }
           // console.log(product)

        }
        myArray.push(product)
    }
    return myArray
};
*/
