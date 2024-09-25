// 2089. Find Target Indices After Sorting Array

//SOlved: https://leetcode.com/problems/find-target-indices-after-sorting-array/submissions/1399564596/

function targetIndices(nums: number[], target: number): number[] {

    nums.sort((a, b) => a - b);

    const ans: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            ans.push(i);
        }
    }

    return ans
}

console.log(targetIndices([1, 2, 5, 2, 3], 2));
