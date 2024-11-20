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
            if (board[j][i] !== '.') {
                col.push(board[j][i])
            }
        }
        console.log(col)
        if (new Set(col).size !== col.length) return false
    }

    // Check 3x3 sub-boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            const subBox: string[] = []; // Collect the sub-box values
            for (let row = boxRow * 3; row < boxRow * 3 + 3; row++) {
                for (let col = boxCol * 3; col < boxCol * 3 + 3; col++) {
                    if (board[row][col] !== '.') {
                        subBox.push(board[row][col]);
                    }
                }
            }
            if (new Set(subBox).size !== subBox.length) return false; // Check for duplicates
        }
    }

    return true

}
