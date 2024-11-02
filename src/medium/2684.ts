// 2684. Maximum Number of Moves in a Grid

function maxMoves(grid: number[][]): number {
    const mem = new Array(grid.length).fill(new Array(grid[0].length).fill(-1));

    let result = 0
    for (let i = 0; i < grid.length; i++) {
        result = Math.max(result, dfs(grid, i, 0, mem))
    }

    return result - 1
}

function dfs(grid: number[][], row: number, col: number, mem: number[][]) {
    // if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length) return 0;
    if (mem[row][col] > -1) return mem[row][col];

    let result = 0;
    const curr = grid[row][col];

    if (row > 0 && curr < grid[row - 1][col + 1]) {
        result = Math.max(result, dfs(grid, row - 1, col + 1, mem));
    }

    if (curr < grid[row][col + 1]) {
        result = Math.max(result, dfs(grid, row, col + 1, mem));
    }

    if (curr < grid[row + 1][col + 1]) {
        result = Math.max(result, dfs(grid, row + 1, col + 1, mem));
    }

    mem[row][col] = Math.max(result, mem[row][col]);

    return mem[row][col] + 1
}

console.log(
    maxMoves([
        [2, 4, 3, 5],
        [5, 4, 9, 3],
        [3, 4, 2, 11],
        [10, 9, 13, 15],
    ]),
);

console.log(
    maxMoves([
        [3, 2, 4],
        [2, 1, 9],
        [1, 1, 7],
    ]),
);

console.log(
    maxMoves([
        [65, 200, 263, 220, 91, 183, 2, 187, 175, 61, 225, 120, 39],
        [111, 242, 294, 31, 241, 90, 145, 25, 262, 214, 145, 71, 294],
        [152, 25, 240, 69, 279, 238, 222, 9, 137, 277, 8, 143, 143],
        [189, 31, 86, 250, 20, 63, 188, 209, 75, 22, 127, 272, 110],
        [122, 94, 298, 25, 90, 169, 68, 3, 208, 274, 202, 135, 275],
        [205, 20, 171, 90, 70, 272, 280, 138, 142, 151, 80, 122, 130],
        [284, 272, 271, 269, 265, 134, 185, 243, 247, 50, 283, 20, 232],
        [266, 236, 265, 234, 249, 62, 98, 130, 122, 226, 285, 168, 204],
        [231, 24, 256, 101, 142, 28, 268, 82, 111, 63, 115, 13, 144],
        [277, 277, 31, 144, 49, 132, 28, 138, 133, 29, 286, 45, 93],
        [163, 96, 25, 9, 3, 159, 148, 59, 25, 81, 233, 127, 12],
        [127, 38, 31, 209, 300, 256, 15, 43, 74, 64, 73, 141, 200],
    ]),
);
