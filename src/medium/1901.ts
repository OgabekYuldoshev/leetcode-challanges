// 1901. Find a Peak Element II

// Solved: https://leetcode.com/problems/find-a-peak-element-ii/submissions/1404815055/

function findPeakGrid(mat: number[][]): number[] {
	let left = 0;
	let right = mat[0].length - 1;

	while (left <= right) {
		let mid = left + Math.floor((right - left) / 2);
		let row = findMax(mat, mid);
		let start = -1;
		let end = -1;

		if (mid - 1 > 0) {
			start = mat[row][mid - 1];
		}

		if (mid + 1 < mat[0].length) {
			end = mat[row][mid + 1];
		}

		if (mat[row][mid] > start && mat[row][mid] > end) {
			return [row, mid];
		}
		if (mat[row][mid] > end) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return [];
}

function findMax(mat: number[][], mid: number): number {
	let max = Number.MIN_SAFE_INTEGER;
	let index = -1;

	for (let i = 0; i < mat.length; i++) {
		let current = mat[i][mid];
		if (current > max) {
			max = Math.max(max, current);
			index = i;
		}
	}
	return index;
}

console.log(
	findPeakGrid([
		[10, 50, 40, 30, 20],
		[1, 500, 2, 3, 4],
	]),
);

// console.log(
//   findPeakGrid([
//     [10, 20, 40, 50, 60],
//     [1, 4, 2, 3, 500],
//   ])
// );
