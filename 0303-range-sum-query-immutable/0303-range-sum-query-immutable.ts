class NumArray {
    private pref: number[];

    constructor(nums: number[]) {
        // pref[i] = sum of nums[0..i-1]; pref[0] = 0
        this.pref = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.pref[i + 1] = this.pref[i] + nums[i];
        }
    }

    sumRange(left: number, right: number): number {
        // sum nums[left..right] = pref[right+1] - pref[left]
        return this.pref[right + 1] - this.pref[left];
    }
}


/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */