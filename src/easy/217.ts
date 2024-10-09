// 217. Contains Duplicate
// Solved: https://leetcode.com/problems/contains-duplicate/submissions/1416833421/

function containsDuplicate(nums: number[]): boolean {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }

    return false;

};

console.log(containsDuplicate([1, 2, 3, 1]))
