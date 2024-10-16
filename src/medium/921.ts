// 921. Minimum Add to Make Parentheses Valid
// SOLVED: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/submissions/1423890922/?envType=daily-question&envId=2024-10-09
function minAddToMakeValid(s: string): number {
    const p = [...s]
    const stack = []
    for (const s of p) {
        if (s === ')') {
            if (stack.length && stack[stack.length - 1] === '(') {
                stack.pop()
            } else {
                stack.push(s)
            }
        }

        if (s === '(') {
            stack.push(s)
        }
    }

    return stack.length
};

console.log(minAddToMakeValid("())"))