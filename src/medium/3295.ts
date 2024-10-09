// 3295. Report Spam Message

// Solved: https://leetcode.com/problems/report-spam-message/submissions/1416824818/

function reportSpam(message: string[], bannedWords: string[]): boolean {
    const set = new Set(bannedWords)
    let counter = 0

    for (const m of message) {
        if (set.has(m)) {
            counter++
            if (counter >= 2) {
                return true
            }
        }
    }

    return false
};

console.log(reportSpam(["hello", "world", "leetcode"], ["world", "hello"]))