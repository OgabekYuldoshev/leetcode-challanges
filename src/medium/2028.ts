// 2028. Find Missing Observations

// Solution: https://leetcode.com/problems/find-missing-observations/submissions/1391747865/?envType=daily-question&envId=2024-09-05

function missingRolls(rolls: number[], mean: number, n: number): number[] {
    const totalRolls = rolls.length + n;

    const expectedSum = mean * totalRolls;

    const currentSum = rolls.reduce((a, b) => a + b, 0);

    const missingSum = expectedSum - currentSum;

    if (missingSum < n || missingSum > 6 * n) {
        return [];
    }

    let ans = new Array(n).fill(1);

    let remainingSum = missingSum - n;

    for (let i = 0; i < n && remainingSum > 0; i++) {
        const add = Math.min(remainingSum, 5);
        ans[i] += add;
        remainingSum -= add;
    }

    return ans;

};

let rolls = [1, 2, 3, 4], mean = 6, n = 4

console.log(missingRolls(rolls, mean, n))