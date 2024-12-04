// 162. Find Peak Element

// Solution: https://leetcode.com/problems/find-peak-element/submissions/1402861259/?source=submission-noac

function findPeakElement(nums: number[]): number {
	if (nums.length === 1) return 0;

	let ans = 0;
	let left = 0;
	let right = nums.length - 1;

	let mid = 0;

	while (left <= right) {
		mid = Math.floor((left + right) / 2);
		const current = nums[mid];
		const rightSide = nums[mid + 1];

		if (current > rightSide) {
			ans = mid;
			right = mid - 1;
		}

		if (current < rightSide) {
			left = mid + 1;
		}

		if (rightSide === undefined) {
			ans = mid;
			break;
		}
	}

	return ans;
}

console.log(findPeakElement([1, 2, 1]));
