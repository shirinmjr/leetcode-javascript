function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return []

    let sorted = [...intervals].sort((a, b) => (a[0] - b[0]))

    let res = []
    res.push(sorted[0])
    for (let i = 1; i < intervals.length; i++) {

        let last = res[res.length - 1]
        let curr = sorted[i]

       if (curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1]);
        } else {
            res.push(curr);
        }
 
    }
    return res
};