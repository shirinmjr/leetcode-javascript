function maxSubArray(nums: number[]): number {
  if (nums.length === 0) throw new Error("nums must be non-empty");
  let maxSum = nums[0];
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const x = nums[i];
    cur = cur + x > x ? cur + x : x;   // avoids two Math.max calls
    if (cur > maxSum) maxSum = cur;
  }
  return maxSum;
}
