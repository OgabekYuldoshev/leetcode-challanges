// 3151. Special Array I

function isArraySpecial(nums: number[]): boolean {
	if (nums.length === 1) return true;

	let ans: boolean[] = [];

	for (let i = 0; i < nums.length - 1; i++) {
		ans.push(nums[i] % 2 !== nums[i + 1] % 2);
	}

	return ans.every((a) => !!a);
}

console.log(isArraySpecial([2, 1]));
