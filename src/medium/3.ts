// 3. Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s: string): number {
    if (s.length < 1) return 0;
    if (s.length < 2) return 1;

    let maxLength = 0;
    let visited = new Array(256).fill(false);

    let left = 0
    let right = 0;
    while (right < s.length) {
        while (visited[s.charCodeAt(right)] === true) {
            visited[s.charCodeAt(left)] = false;
            left++;
        }
        visited[s.charCodeAt(right)] = true;

        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
