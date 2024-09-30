function searchInsert(nums: number[], target: number): number {

 let min = 0
  let max = nums.length - 1

  while (true) {
    const middle = Math.floor((min + max) / 2)
    const num = nums[middle]

    if (max - min <= 1) {
      if (target <= nums[min]) {
        return min
      } else if (target <= nums[max]) {
        return max
      } else {
        return max + 1
      }
    }

    if (num > target) {
      max = middle
    } else if (num < target) {
      min = middle
    } else {
      return middle
    }
  }



    /*
    for (let i = 0; i < nums.length; i++) {
    
        if (nums[i] === target) {
            return i
        } else if (nums[i] < target && target < nums[i + 1]) {
            return i + 1
        }else if ( target < nums[0] && i===0){     
           return 0
        }
    }
    return nums.length
    */
};