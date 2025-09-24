function spiralOrder(matrix: number[][]): number[] {
    const res: number[] = [];
    if (matrix.length === 0 || matrix[0].length === 0) return res;

    let top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // left → right
        for (let c = left; c <= right; c++) res.push(matrix[top][c]);
        top++;

        // top → bottom
        for (let r = top; r <= bottom; r++) res.push(matrix[r][right]);
        right--;

        if (top <= bottom) {
            // right → left
            for (let c = right; c >= left; c--) res.push(matrix[bottom][c]);
            bottom--;
        }

        if (left <= right) {
            // bottom → top
            for (let r = bottom; r >= top; r--) res.push(matrix[r][left]);
            left++;
        }
    }

    return res;
}
