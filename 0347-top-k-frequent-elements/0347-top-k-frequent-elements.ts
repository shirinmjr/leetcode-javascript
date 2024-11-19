function topKFrequent(nums: number[], k: number): number[] {
    let reusltArray = Array.from(getHashmap(nums))
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);
    return reusltArray
};

function getHashmap(nums: number[]): Map<number, number> {
    const myHash = new Map<number, number>()
    for (const num of nums) {
        myHash.set(num, (myHash.get(num) || 0) + 1)
    }
    return myHash

}