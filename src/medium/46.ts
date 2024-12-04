// 46. Permutations

function permute(nums: number[]): number[][] {
	const map: number[][] = [];

	function recursion(arr: number[], idx: number) {
		if (idx === arr.length) {
			map.push([...arr]);
			return;
		}

		for (let i = idx; i < arr.length; i++) {
			[arr[idx], arr[i]] = [arr[i], arr[idx]];
			recursion(arr, idx + 1);
			[arr[idx], arr[i]] = [arr[i], arr[idx]];
		}
	}

	recursion(nums, 0);

	return map;
}

console.log(permute([1, 2, 3]));
