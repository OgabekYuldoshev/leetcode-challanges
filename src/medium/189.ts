// 189. Rotate Array

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
	for (let i = 0; i < k; i++) {
		let lastOfArray = nums[nums.length - 1];
		nums.pop();
		nums.unshift(lastOfArray);
	}
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);
