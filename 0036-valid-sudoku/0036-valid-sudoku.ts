function isValidSudoku(board: string[][]): boolean {
    // Initialize sets for rows, columns, and 3x3 sub-boxes
    const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
    const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());
    const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());

    // Iterate over each cell of the board
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];

            // Skip empty cells
            if (value === '.') continue;

            // Calculate the index of the 3x3 sub-box
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // Check if the value already exists in the same row, column, or sub-box
            if (rows[i].has(value) || cols[j].has(value) || boxes[boxIndex].has(value)) {
                return false;
            }

            // Add the value to the respective row, column, and box sets
            rows[i].add(value);
            cols[j].add(value);
            boxes[boxIndex].add(value);
        }
    }

    // If no duplicates are found, the board is valid
    return true;
}
