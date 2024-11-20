function isValidSudoku(board: string[][]): boolean {
    const row: Set<string>[] = Array.from({ length: 9 }, () => new Set())
    const col: Set<string>[] = Array.from({ length: 9 }, () => new Set())
    const box: Set<string>[] = Array.from({ length: 9 }, () => new Set())
    let count = 1
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j]
            if (value === '.') continue
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            if (row[i].has(value) || col[j].has(value) || box[boxIndex].has(value)) return false
            row[i].add(value)
            col[j].add(value)
            box[boxIndex].add(value)

            // console.log("round", count)
            // console.log("row===", row)
            // console.log("col===", col)
            // console.log("box===", box)
            //count++
        }
    }

    return true
};

/* This is not good for checking the boxes
function isValidSudoku(board: string[][]): boolean {
    const mySet = new Set()
    const rows = board
    //check rows
    for (const row of rows) {
        const filteredRow = row.filter((num: string) => num !== '.')
        if (new Set(filteredRow).size !== filteredRow.length) return false
    }

    for (let i = 0; i < 9; i++) {
        let col = []
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if (board[j][i] !== '.') {
                col.push(board[j][i]);
            }
        }
        //console.log(col)
        if (new Set(col).size !== col.length) return false
    }
    return true
}
*/