// 2951. Find the Peaks
// Solution: https://leetcode.com/problems/find-the-peaks/submissions/1403562998/
function findPeaks(mountain: number[]): number[] {
	const ans: number[] = [];

	for (let i = 0; i < mountain.length - 2; i++) {
		const left = mountain[i];
		const current = mountain[i + 1];
		const right = mountain[i + 2];

		if (current > left && current > right) {
			ans.push(i + 1);
		}
	}

	return ans;
}

console.log(findPeaks([2, 4, 4]));
