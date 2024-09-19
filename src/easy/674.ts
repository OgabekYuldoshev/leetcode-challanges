// 674. Longest Continuous Increasing Subsequence

// Solutions: https://leetcode.com/problems/find-smallest-letter-greater-than-target/submissions/1384239585/?envType=problem-list-v2&envId=array&difficulty=EASY
function findLengthOfLCIS(nums: number[]): number {
	let count = 1;
	const ans = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < nums[i + 1]) {
			count = count + 1;
		} else {
			ans.push(count);
			count = 1;
		}
	}

	return Math.max(...ans);
}

console.log(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]));
