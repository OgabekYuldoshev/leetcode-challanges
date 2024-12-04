function threeSum(nums: number[]): number[][] {
	nums = nums.sort((a, b) => a - b);
	const ans = new Set<string>();

	for (let left = 0; left < nums.length - 2; left++) {
		if (nums[left] > 0) break;
		if (nums[left] === nums[left - 1]) continue;

		let middle = left + 1;
		let right = nums.length - 1;

		while (middle < right) {
			const sum = nums[left] + nums[middle] + nums[right];

			if (sum === 0) {
				ans.add(JSON.stringify([nums[left], nums[middle], nums[right]]));
				middle++;
				right--;
			}

			if (sum > 0) {
				right--;
			}

			if (sum < 0) {
				middle++;
			}
		}
	}

	return Array.from([...ans.values()]).map((x) => JSON.parse(x));
}

console.log(threeSum([-2, 0, 0, 2, 2]));
