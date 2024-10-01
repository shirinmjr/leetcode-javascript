type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  return nums.reduce((accum, curr) => fn(accum, curr), init);

};
/*
type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
    // Initialize the accumulator with the initial value
    let accum = init;
    
    // Iterate over the array and apply the function to each element
    for (let i = 0; i < nums.length; i++) {
        accum = fn(accum, nums[i]);
    }

    // Return the final accumulated value
    return accum;
}
*/