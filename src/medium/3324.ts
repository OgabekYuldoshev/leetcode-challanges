// 3324. Find the Sequence of Strings Appeared on the Screen
// Solved: https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/submissions/1429116815/

function stringSequence(target: string): string[] {
	const ans: string[] = [];
	const targetArr = [...target];
	let input = "";

	for (let i = 0; i < targetArr.length; i++) {
		input = `${input}a`;
		ans.push(input);

		let currentChar = "a";
		while (currentChar !== targetArr[i]) {
			currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
			input = input.substring(0, input.length - 1) + currentChar;
			console.log(input, currentChar);
			ans.push(input);
		}
	}

	return ans;
}

console.log(stringSequence("he"));
