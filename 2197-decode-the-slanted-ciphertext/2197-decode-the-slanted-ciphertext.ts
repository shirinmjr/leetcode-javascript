function decodeCiphertext(encodedText: string, rows: number): string {
    // Check if there's only one row, in which case no decoding is necessary. Return the encoded text as is.
    if (rows === 1) return encodedText;

    // Calculate the number of columns needed to fit the text in a matrix of 'rows' rows.
    // The number of columns is the ceiling of the total length of encodedText divided by the number of rows.
    let cols = Math.ceil(encodedText.length / rows)

    // Initialize an empty matrix, which will store the characters row by row.
    const matrix: string[][] = [];

    // Initialize an empty string to store the final decoded result.
    let result = "";

    // Variable to keep track of the index as we go through the encoded text.
    let index = 0;

    // Loop through each row to populate the matrix.
    for (let i = 0; i < rows; i++) {
        // Initialize an empty array for the current row.
        const row: string[] = [];

        // Loop through each column in the current row.
        for (let j = 0; j < cols; j++) {
            // Push the character at the current index into the row.
            // If index exceeds the length of encodedText, push a space (' ') instead.
            row.push(encodedText.charAt(index) || ' ');

            // Increment the index to point to the next character in encodedText.
            index++;
        }

        // Push the populated row into the matrix.
        matrix.push(row);
    }

    // Optionally log the matrix for debugging purposes.
    console.log(matrix);

    // Now, loop through each column of the matrix and read characters top-to-bottom, column by column.
    // This forms the decoded message.
    for (let col = 0; col < cols; col++) {
        // Initialize a temporary variable `temp` that keeps track of the column index.
        let temp = col;

        // Loop through each row to extract characters in the current column.
        // Stop if we reach the end of the column.
        for (let row = 0; row < rows && temp < cols; row++) {

            // Add the character from the current position in the matrix to the result string.
            // The commented-out check (`matrix[row][temp] !== ' '`) can be used to skip spaces if desired.
            result += matrix[row][temp];

            // Increment the column index (`temp`) for the next row.
            temp++;
        }
    }

    // Return the result string with trailing spaces removed.
    return result.trimRight();
};
