// 599. Minimum Index Sum of Two Lists
// Solution: https://leetcode.com/problems/minimum-index-sum-of-two-lists/submissions/1388525419/?envType=problem-list-v2&envId=array&difficulty=EASY

function findRestaurant(list1: string[], list2: string[]): string[] {
	let ans: string[] = [];

	let minNum = Number.POSITIVE_INFINITY;

	for (let i = 0; i < list1.length; i++) {
		const index = list2.indexOf(list1[i]);

		if (index !== -1) {
			const sumIndex = index + i;

			if (minNum > sumIndex) {
				minNum = sumIndex;
				ans = [list1[i]];
				continue;
			}

			if (sumIndex === minNum) {
				ans.push(list1[i]);
			}
		}
	}
	return ans;
}

console.log(
	findRestaurant(
		["Shogun", "Tapioca Express", "Burger King", "KFC"],
		[
			"Piatti",
			"The Grill at Torrey Pines",
			"Hungry Hunter Steakhouse",
			"Shogun",
		],
	),
);
