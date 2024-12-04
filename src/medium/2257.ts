function countUnguarded(
	m: number,
	n: number,
	guards: number[][],
	walls: number[][],
): number {
	// create grid array
	const grid = Array(m)
		.fill(null)
		.map(() => Array(n).fill(0));
	let counter = m * n - (guards.length + walls.length);

	// set walls on it
	for (const [x, y] of walls) {
		grid[x][y] = -1;
	}

	// set all guards
	for (const [x, y] of guards) {
		grid[x][y] = 2;
	}

	// Look all guards view
	for (const [x, y] of guards) {
		lookUpRight(x, y + 1);
		lookUpLeft(x, y - 1);
		lookUpBottom(x + 1, y);
		lookUpTop(x - 1, y);
	}

	function lookUpRight(x: number, y: number) {
		while (y < grid[0].length) {
			if (grid[x][y] === -1 || grid[x][y] === 2) {
				break;
			}
			console.log(y, "e", grid[x][y]);
			if (grid[x][y] === 0) {
				counter--;
			}
			grid[x][y] = 1;
			y++;
		}
	}

	function lookUpLeft(x: number, y: number) {
		while (y > -1) {
			if (grid[x][y] === -1 || grid[x][y] === 2) {
				break;
			}
			if (grid[x][y] === 0) {
				counter--;
			}
			grid[x][y] = 1;
			y--;
		}
	}

	function lookUpBottom(x: number, y: number) {
		while (x < grid.length) {
			if (grid[x][y] === -1 || grid[x][y] === 2) {
				break;
			}

			if (grid[x][y] === 0) {
				counter--;
			}
			grid[x][y] = 1;
			x++;
		}
	}

	function lookUpTop(x: number, y: number) {
		while (x > -1) {
			if (grid[x][y] === -1 || grid[x][y] === 2) {
				break;
			}
			if (grid[x][y] === 0) {
				counter--;
			}
			grid[x][y] = 1;
			x--;
		}
	}

	return counter;
}

console.log(
	countUnguarded(
		4,
		6,
		[
			[0, 0],
			[1, 1],
			[2, 3],
		],
		[
			[0, 1],
			[2, 2],
			[1, 4],
		],
	),
);
console.log(
	countUnguarded(
		2,
		7,
		[
			[1, 5],
			[1, 1],
			[1, 6],
			[0, 2],
		],
		[
			[0, 6],
			[0, 3],
			[0, 5],
		],
	),
);
