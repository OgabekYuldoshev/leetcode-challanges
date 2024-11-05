// 54. Spiral Matrix
// Solution: https://leetcode.com/problems/spiral-matrix/solutions/6009321/problem-statement-spiral-order-matrix-traversal/

function spiralOrder(matrix: number[][]): number[] {
    const ans: number[] = [];
    if (matrix.length === 0) return ans;

    while (true) {
        if (matrix.length === 0) break;

        for (let i = 0; i < matrix[0].length; i++) {
            ans.push(matrix[0][i])
        }

        matrix.shift()

        if (matrix.length === 0) break;

        matrix = rotateMatrixLeft(matrix)
    }

    return ans;
}

function rotateMatrixLeft(matrix: number[][]): number[][] {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const rotatedMatrix: number[][] = Array.from({ length: cols }, () => Array(rows).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            rotatedMatrix[cols - j - 1][i] = matrix[i][j];
        }
    }

    return rotatedMatrix;
}

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]),
);
