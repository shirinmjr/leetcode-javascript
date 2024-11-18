function decrypt(code: number[], k: number): number[] {
    //Create a sliding window in which k is k 
    if (k === 0) {
        return Array(code.length).fill(0);
    }
    const result: number[] = [];
    const L = code.length;
    if (k > 0) {
        for (let i = 0; i < L; i++) {
            let sum = 0;

            for (let j = 1; j <= k; j++) {
                sum += code[(i + j) % L];
            }
            result[i] = sum;
        }
    }
    if (k < 0) {
        for (let i = 0; i < L; i++) {
            let sum = 0;
            for (let j = 1; j <= -k; j++) {
                sum += code[(i - j + L) % L];
                //console.log("in", sum);
            }
            //console.log("insert", sum);

            result[i] = sum;
        }
    }


    return result;
};