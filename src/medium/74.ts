// 74. Search a 2D Matrix
// Solved: https://leetcode.com/problems/search-a-2d-matrix/submissions/1433157628/?envType=problem-list-v2&envId=binary-search

function searchMatrix(matrix: number[][], target: number): boolean {
    let startRow = 0;
    let endRow = matrix.length - 1;

    while (startRow <= endRow) {
        const midRow = Math.floor((startRow + endRow) / 2);

        let startCol = 0;
        let endCol = matrix[midRow].length - 1;
        while (startCol <= endCol) {
            const midCol = Math.floor((startCol + endCol) / 2);
            if (matrix[midRow][midCol] === target) {
                return true
            }

            if (matrix[midRow][midCol] < target) {
                startCol = midCol + 1;
            } else {
                endCol = midCol - 1;
            }
        }

        if (matrix[midRow][0] === target) {
            return true;
        }

        if (matrix[midRow][0] < target) {
            startRow = midRow + 1;
        } else {
            endRow = midRow - 1;
        }
    }

    return false;
}

console.log(
    searchMatrix(
        [[-8, -7, -5, -3, -3, -1, 1], [2, 2, 2, 3, 3, 5, 7], [8, 9, 11, 11, 13, 15, 17], [18, 18, 18, 20, 20, 20, 21], [23, 24, 26, 26, 26, 27, 27], [28, 29, 29, 30, 32, 32, 34]],
        -5,
    ),
);
