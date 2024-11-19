function topKFrequent(nums: number[], k: number): number[] {
   return Array.from(getHashmap(nums))
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);
};

function getHashmap(nums: number[]): Map<number, number> {
    const myHash = new Map<number, number>()
    for (const num of nums) {
        myHash.set(num, (myHash.get(num) || 0) + 1)
    }
    return myHash

}