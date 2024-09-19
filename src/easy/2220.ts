// 2220. Minimum Bit Flips to Convert Number

// Submittion: https://leetcode.com/problems/minimum-bit-flips-to-convert-number/submissions/1386384945/?envType=daily-question&envId=2024-09-11

function minBitFlips(start: number, goal: number): number {
	let a = (start >>> 0).toString(2);
	let b = (goal >>> 0).toString(2);

	if (a.length > b.length) {
		b = "0".repeat(a.length - b.length) + b;
	}

	if (a.length < b.length) {
		a = "0".repeat(b.length - a.length) + a;
	}

	let count = 0;

	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) count++;
	}

	return count;
}

console.log(minBitFlips(99, 29));
