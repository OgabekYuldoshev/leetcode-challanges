// 989. Add to Array-Form of Integer
// Solution: https://leetcode.com/problems/add-to-array-form-of-integer/submissions/1414799323/
function addToArrayForm(num: number[], k: number): number[] {
	let i = num.length - 1;

	while (i >= 0) {
		const sum = num[i] + k;
		k = Math.floor(sum / 10);
		num[i] = sum % 10;
		i -= 1;
	}

	while (k > 0) {
		const sum = k % 10;
		k = Math.floor(k / 10);
		num.unshift(sum);
	}

	return num;
}

console.log(addToArrayForm([0], 10000));
