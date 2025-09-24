function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];

    let sorted: number[][] = [...intervals].sort((a, b) => a[0] - b[0]);

    let res: number[][] = [];
    res.push(sorted[0]);

    for (let i = 1; i < sorted.length; i++) {
        let curr = res[res.length - 1];
        let next = sorted[i];

        if (next[0] <= curr[1]) {
            // merge
            curr[1] = Math.max(curr[1], next[1]);
        } else {
            res.push(next);
        }
    }
    return res;
}
