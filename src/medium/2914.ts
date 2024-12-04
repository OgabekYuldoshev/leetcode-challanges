// 2914. Minimum Number of Changes to Make Binary String Beautiful
// Solved: https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/?envType=daily-question&envId=2024-11-05

function minChanges(s: string): number {
	let count = 0;

	for (let i = 0; i < s.length; i += 2) {
		if (s[i] !== s[i + 1]) count++;
	}

	return count;
}

console.log(minChanges("1001"));
