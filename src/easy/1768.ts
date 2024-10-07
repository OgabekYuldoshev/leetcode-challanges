// 1768. Merge Strings Alternately

// Solution: https://leetcode.com/problems/merge-strings-alternately/submissions/1414759968/

function mergeAlternately(word1: string, word2: string): string {
    const length = Math.max(word1.length, word2.length);
    let ans = ''

    for (let i = 0; i < length; i++) {
        if (word1[i] && word2[i]) {
            ans = ans + word1[i] + word2[i]
            continue;
        }

        if (word1[i]) {
            ans = ans + word1[i]
            continue;
        }

        if (word2[i]) {
            ans = ans + word2[i]
        }
    }

    return ans
};

console.log(mergeAlternately("ab", "pqrs"))