function searchInsert(nums: number[], target: number): number {

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

};