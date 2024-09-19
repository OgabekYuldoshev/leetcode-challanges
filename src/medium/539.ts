// 539. Minimum Time Difference

// Solved: https://leetcode.com/problems/minimum-time-difference/submissions/1392852791/?envType=daily-question&envId=2024-09-16

function findMinDifference(timePoints: string[]): number {
	let minutes = new Array(timePoints.length);

	for (let i = 0; i < timePoints.length; i++) {
		const time = timePoints[i];

		const h = time.substring(0, 2);

		const m = time.substring(time.length - 2, time.length);

		minutes[i] = Number(h) * 60 + Number(m);
	}

	minutes = minutes.sort((a, b) => a - b);

	let ans = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < minutes.length - 1; i++) {
		ans = Math.min(ans, minutes[i + 1] - minutes[i]);
	}

	console.log(ans);

	const diff = 24 * 60 - minutes[minutes.length - 1] + minutes[0];

	return Math.min(ans, diff);
}

const timePoints = ["12:12", "12:13"];

console.log(findMinDifference(timePoints));
