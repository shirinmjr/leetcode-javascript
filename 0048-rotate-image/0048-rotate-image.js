/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    // Transpose
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < i; j++) {
            // Switch matrix[i][j] and matrix[j][i] 
            // With XOR swap
            matrix[i][j] ^= matrix[j][i]
            matrix[j][i] ^= matrix[i][j]
            matrix[i][j] ^= matrix[j][i]
        }
    }

    // Reverse columns
    for (var i in matrix) {
        matrix[i] = matrix[i].reverse()
    }

    return matrix
}