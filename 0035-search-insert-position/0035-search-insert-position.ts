function searchInsert(nums: number[], target: number): number {
   // if (target === 0) return 0
    for (let i = 0; i < nums.length; i++) {
        //console.log("before",i)
        if (nums[i] === target) {
            return i
            console.log("1111")
        } else if (nums[i] < target && target < nums[i + 1]) {
               console.log("222")
            return i + 1
        }else if ( target < nums[0] && i===0){
                console.log("333")
           return 0
        }

    }
    return nums.length

};