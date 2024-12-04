// 2044. Count Number of Maximum Bitwise-OR Subsets
// Solved: https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/submissions/1435834661/?envType=daily-question&envId=2024-10-24

function countMaxOrSubsets(nums: number[]): number {
	const maxOr = nums.reduce((prev, i) => i | prev, 0);
	const subset: number[] = [];
	let counter = 0;

	function calcSubset(A: number[], subset: number[], index: number) {
		const maxOrsubset = subset.reduce((prev, i) => i | prev, 0);
		if (maxOr === maxOrsubset) {
			counter += 1;
		}
		for (let i = index; i < A.length; i++) {
			subset.push(A[i]);

			calcSubset(A, subset, i + 1);

			subset.pop();
		}
	}

	calcSubset(nums, subset, 0);

	return counter;
}

console.log(countMaxOrSubsets([2, 2, 2]));
