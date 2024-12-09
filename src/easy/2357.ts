// 2357. Make Array Zero by Subtracting Equal Amounts

function findMinNonZeroNum(nums: number[]) {
  let currentNum = Number.POSITIVE_INFINITY

  for (const n of nums) {
    if (n > 0 && n < currentNum) {
      currentNum = n
    }
  }

  if (currentNum === Number.POSITIVE_INFINITY) {
    return -1
  }

  return currentNum
}
function minimumOperations(nums: number[]): number {
  let count = 0

  while (true) {
    let minNum = findMinNonZeroNum(nums)
    if (minNum === -1) break;
    count += 1
    nums = nums.map(n => n - minNum)
  }
  return count
};

console.log(minimumOperations([0]));