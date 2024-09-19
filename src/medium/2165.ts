// 2165. Smallest Value of the Rearranged Number

// Submittion: https://leetcode.com/problems/smallest-value-of-the-rearranged-number/submissions/1385318688/

function smallestNumber(num: number): number {
	const number = Math.abs(num);

	if (num < 0) {
		const digets = [...number.toString()].map(Number).sort((a, b) => b - a);
		return -digets.join("");
	}
	const digets = [...number.toString()].map(Number).sort((a, b) => a - b);

	if (digets[0] === 0) {
		for (let i = 0; i < digets.length; i++) {
			if (digets[i] < digets[i + 1]) {
				[digets[0], digets[i + 1]] = [digets[i + 1], digets[i]];
				break;
			}
		}
	}

	return +digets.join("");
}

console.log(smallestNumber(63));
