// 27. Remove Element

function removeElement(nums: number[], val: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    if (nums[right] === val) {
      right--;
    } else {
      if (nums[left] === val) {
        let tmp = nums[right]
        nums[right] = nums[left]
        nums[left] = tmp
        right--
        left++
      } else {
        left++
      }
    }
  }
  return nums.slice(0, left).length
};


console.log(removeElement([1], 1))