// 2319. Check if Matrix Is X-Matrix

function checkXMatrix(grid: number[][]): boolean {
	let result = true;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (i !== grid[i].length - j - 1 && i !== j) {
				if (grid[i][j] !== 0) {
					result = false;
					break;
				}
			} else {
				if (grid[i][j] === 0) {
					result = false;
					break;
				}
			}
		}
	}
	return result;
}

let grid = [
	[0, 0, 0, 0, 1],
	[0, 4, 0, 1, 0],
	[0, 0, 5, 0, 0],
	[0, 5, 0, 2, 0],
	[4, 0, 0, 0, 2],
];

console.log(checkXMatrix(grid));
