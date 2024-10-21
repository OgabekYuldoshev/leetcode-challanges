// 1967. Number of Strings That Appear as Substrings in Word
// Solved: https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/submissions/1429063355/
function numOfStrings(patterns: string[], word: string): number {
    let ans = 0;


    for (const p of patterns) {
        if (word.includes(p)) {
            ans++
        }
    }

    return ans;
}

console.log(numOfStrings(["cjevwg"], "jevwg"));
