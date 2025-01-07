// 2779. Maximum Beauty of an Array After Applying Operation

function maximumBeauty(nums: number[], k: number): number {
	let map = new Map<number, number>();
	let min = 0;
	let max = 0;

	for (const n of nums) {
		map.set(n - k, (map.get(n - k) || 0) + 1);
		map.set(n + k + 1, (map.get(n + k + 1) || 0) - 1);
		min = Math.min(n - k, min);
		max = Math.max(n + k, max);
	}
	let count = 0;
	let ans = 0;

	for (let i = min; i < max; i++) {
		count += map.get(i) || 0;
		ans = Math.max(ans, count);
	}
	return ans;
}
console.log(maximumBeauty([4, 6, 1, 2], 2));
