// 392. Is Subsequence

// Solved: https://leetcode.com/problems/is-subsequence/submissions/1414753582/

function isSubsequence(s: string, t: string): boolean {
    let pointer = 0;

    for (let i = 0; i < t.length; i++) {
        const character = t[i];
        if (character === s[pointer]) {
            pointer++
        }
    }

    return pointer === s.length;
}

console.log(isSubsequence("abc", "ahbgdc"));
