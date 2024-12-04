// 34. Find First and Last Position of Element in Sorted Array

function findFirst(nums: number[], target: number): number {
	let left = 0;
	let right = nums.length - 1;
	let mid = 0;

	while (left <= right) {
		mid = Math.floor((left + right) / 2);

		if (nums[mid] === target) {
			if (nums[mid - 1] !== target) {
				return mid;
			}
			right = mid - 1;
		}

		if (target < nums[mid]) {
			right = mid - 1;
		}

		if (target > nums[mid]) {
			left = mid + 1;
		}
	}

	return -1;
}

function findLast(nums: number[], target: number): number {
	let left = 0;
	let right = nums.length - 1;
	let mid = 0;

	while (left <= right) {
		mid = Math.floor((left + right) / 2);

		if (nums[mid] === target) {
			if (nums[mid + 1] !== target) {
				return mid;
			}
			left = mid + 1;
		}

		if (target < nums[mid]) {
			right = mid - 1;
		}

		if (target > nums[mid]) {
			left = mid + 1;
		}
	}

	return -1;
}

function searchRange(nums: number[], target: number): number[] {
	return [findFirst(nums, target), findLast(nums, target)];
}

console.log(searchRange([5, 7, 7, 8, 8, 8, 10], 8));
