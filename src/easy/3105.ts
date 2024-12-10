// 3105. Longest Strictly Increasing or Strictly Decreasing Subarray

function longestMonotonicSubarray(nums: number[]): number {
	if (nums.length <= 1) return nums.length;

	let maximumLength = 1;
	let dec = 1;
	let inc = 1;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			dec = 1;
			inc++;
		} else if (nums[i] < nums[i - 1]) {
			inc = 1;
			dec++;
		} else {
			dec = 1;
			inc = 1;
		}

		maximumLength = Math.max(maximumLength, dec, inc);
	}

	return maximumLength;
}

console.log(longestMonotonicSubarray([1, 9, 7, 1]));
