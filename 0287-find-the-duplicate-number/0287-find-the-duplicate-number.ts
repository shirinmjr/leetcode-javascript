function findDuplicate(nums: number[]): number {
    const mySet = new Set()
    for(let i = 0; i < nums.length;i++){
        if(mySet.has(nums[i])){
            return nums[i]
        }else{
            mySet.add(nums[i])
        }
    }
};