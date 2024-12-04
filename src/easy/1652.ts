// 1652. Defuse the Bomb

function decrypt(code: number[], k: number): number[] {
	if (k === 0) {
		return new Array(code.length).fill(0);
	}

	const len = code.length;
	const result: number[] = [];

	for (let i = 0; i < len; i++) {
		let sum = 0;

		if (k > 0) {
			for (let j = 1; j <= k; j++) {
				sum += code[(i + j) % len];
			}
		} else {
			for (let j = 1; j <= Math.abs(k); j++) {
				sum += code[(i - j + len) % len];
			}
		}

		result.push(sum);
	}

	return result;
}
console.log(decrypt([10, 5, 7, 7, 3, 2, 10, 3, 6, 9, 1, 6], -4));
