// 2981. Find Longest Special Substring That Occurs Thrice I

function maximumLength(s: string): number {
	const count: Map<string, number> = new Map();

	for (let i = 0; i < s.length; i++) {
		let currString = "";

		for (let j = i; j < s.length; j++) {
			if (
				currString.length === 0 ||
				currString[currString.length - 1] === s[j]
			) {
				currString += s[j];
				count.set(currString, (count.get(currString) || 0) + 1);
			} else {
				break;
			}
		}
	}

	let ans = 0;
	for (const str of count.keys()) {
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		if (count.get(str)! >= 3 && str.length > ans) {
			ans = str.length;
		}
	}

	return ans === 0 ? -1 : ans;
}

console.log(maximumLength("abcaba"));
