// 268. Missing Number
// Solved: https://leetcode.com/problems/missing-number/submissions/1423895290/
function missingNumber(nums: number[]): number {
	let sum = nums.reduce((acc, curr) => acc + curr, 0);
	let expectedSum = (nums.length * (nums.length + 1)) / 2;
	return expectedSum - sum;
}

console.log(missingNumber([3, 0, 1]));
