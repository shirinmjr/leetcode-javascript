type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  return nums.reduce((accum, curr) => fn(accum, curr), init);

};