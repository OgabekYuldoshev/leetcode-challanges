// 977. Squares of a Sorted Array

// "solved: https://leetcode.com/problems/squares-of-a-sorted-array/submissions/1414765307/"

function sortedSquares(nums: number[]): number[] {
    return nums.map((num) => {
        return Math.abs(num) * Math.abs(num)
    }).sort((a, b) => a - b)
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))