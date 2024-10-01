function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result = arr.map((n,i) => {
        return fn(arr[i], i)

    })

    return result
};