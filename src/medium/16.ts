// 16. 3Sum Closest
// SOLUTION: https://leetcode.com/problems/3sum-closest/submissions/1399344765/?envType=problem-list-v2&envId=array&difficulty=EASY%2CMEDIUM
function threeSumClosest(nums: number[], target: number): number {
    nums = nums.sort((a, b) => a - b);
    let diff = Number.POSITIVE_INFINITY;
    let ans = 0;
    for (let left = 0; left < nums.length - 2; left++) {
        let middle = left + 1;
        let right = nums.length - 1;

        while (middle < right) {
            const sum = nums[left] + nums[middle] + nums[right];
            const currentDiff = Math.abs(sum - target)
            if (currentDiff < diff) {
                ans = sum;
                diff = currentDiff
            }


            if (sum - target > 0) {
                right--;
            } else {
                middle++;
            }
        }
    }

    return ans
}

console.log(threeSumClosest([1, 1, 1, 1], 0));
