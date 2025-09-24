function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];

    let sorted: number[][] = [...intervals].sort((a, b) => a[0] - b[0]);

    let res: number[][] = [];
    res.push(sorted[0]);

    for (let i = 1; i < sorted.length; i++) {
        let curr = res[res.length - 1];
         let last = sorted[i];
         
        if (last[0] <= curr[1]) {
            // merge: extend the end of curr to cover both intervals
            curr[1] = Math.max(curr[1], last[1]);
        } else {
            res.push(last);
        }
    }

    return res;
}
