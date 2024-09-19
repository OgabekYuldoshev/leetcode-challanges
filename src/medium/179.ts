// 179. Largest Number

function largestNumber(nums: number[]): string {
	const l = nums.map(String).sort((a, b) => {
		const num1 = a + b;
		const num2 = b + a;
		return Number(num2) - Number(num1);
	});

	if (l[0] === "0") {
		return "0";
	}

	return l.join("");
}

const nums = [3, 30, 34, 5, 9];
console.log(largestNumber(nums));
