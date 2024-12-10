function selectionSort(nums: number[]): number[] {
	const n = nums.length;

	for (let i = 0; i < n - 1; i++) {
		// Assume the first unsorted element is the smallest
		let minIndex = i;

		// Find the index of the smallest element in the unsorted part
		for (let j = i + 1; j < n; j++) {
			if (nums[j] < nums[minIndex]) {
				minIndex = j;
			}
		}

		// Swap the found smallest element with the first unsorted element
		if (minIndex !== i) {
			[nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
		}
	}

	return nums;
}

console.log(selectionSort([3, 1, 2, 4, 56, 67, 8, 5]));
