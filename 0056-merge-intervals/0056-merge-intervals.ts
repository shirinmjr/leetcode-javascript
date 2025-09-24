function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];
    let sorted: number[][] = [...intervals].sort((a, b) => a[0] - b[0]);

    let res = [];
    res.push(sorted[0]);
    for (let i = 1; i < sorted.length; i++) {
        let last = sorted[i];
        let curr = res[res.length - 1];
        if (last[0] <= curr[1]) {
            curr[1] = Math.max(last[1], curr[1]);

        } else {
            res.push(last)
        }
    }
    return res
};