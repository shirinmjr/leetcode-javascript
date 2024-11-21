function decodeCiphertext(encodedText: string, rows: number): string {
    if (rows === 1) return encodedText;
    let cols = Math.ceil(encodedText.length / rows)

    const matrix: string[][] = [];
    let result = "";

    let index = 0
    for (let i = 0; i < rows; i++) {
        const row: string[] = [];
        for (let j = 0; j < cols; j++) {

            row.push(encodedText.charAt(index) || ' ')
            index++
        }
        matrix.push(row)
    }
    console.log(matrix)



    for (let col = 0; col < cols; col++) {
        let temp = col
        for (let row = 0; row < rows && temp < cols; row++) {

            // if (matrix[row][temp] !== ' ') {
                result += matrix[row][temp]
          //  }
            temp++
        }


    }

    return result.trimRight();
};

    // for (const char of encodedText) {
    //     console.log(`${char}-`)
    // }
    // console.log(encodedText.length)