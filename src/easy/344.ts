// 344. Reverse String
// Solved: https://leetcode.com/problems/reverse-string/submissions/1414778593/
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const length = s.length - 1;

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        const c = s[i];
        s[i] = s[length - i];
        s[length - i] = c;
    }
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
