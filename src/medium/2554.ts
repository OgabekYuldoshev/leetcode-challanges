// 2554. Maximum Number of Integers to Choose From a Range I

function maxCount(banned: number[], n: number, maxSum: number): number {
	let count = 0;
	let bannedNums = new Set(banned);
	let range = Array(n)
		.fill(1)
		.map((i, index) => index + i);
	let sum = 0;

	for (const num of range) {
		if (bannedNums.has(num)) continue;
		sum += num;
		if (sum > maxSum) break;
		count += 1;
	}

	return count;
}

console.log(maxCount([11], 7, 50));
