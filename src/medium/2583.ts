// 2583. Kth Largest Sum in a Binary Tree
// Solved: https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/submissions/1430153546/?envType=daily-question&envId=2024-10-22

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
	const levelOfSum: number[] = [];
	const currentLevel = 0;

	function recursion(node: TreeNode | null, currentLevel: number) {
		if (node === null) return 0;

		levelOfSum[currentLevel] = (levelOfSum[currentLevel] || 0) + node.val;

		recursion(node.right, currentLevel + 1);
		recursion(node.left, currentLevel + 1);
	}

	recursion(root, currentLevel);

	levelOfSum.sort((a, b) => b - a);

	if (k > levelOfSum.length) {
		return -1;
	}

	return levelOfSum[k - 1];
}
