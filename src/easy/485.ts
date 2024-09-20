// 485. Max Consecutive Ones

// Solution: https://leetcode.com/problems/max-consecutive-ones/submissions/1396115036/?envType=problem-list-v2&envId=array&difficulty=EASY%2CMEDIUM

function findMaxConsecutiveOnes(nums: number[]): number {
    let ans = 0;

    let counter = 0;

    for (const n of nums) {
        if (n === 1) {
            counter += 1
        } else {
            ans = Math.max(ans, counter)
            counter = 0
        }
    }

    ans = Math.max(ans, counter)

    return ans;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
