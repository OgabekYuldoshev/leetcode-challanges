// 704. Binary Search
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
