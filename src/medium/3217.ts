// 3217. Delete Nodes From Linked List Present in Array

// Submittion: https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/submissions/1383326502/?envType=daily-question&envId=2024-09-06

import { generateLinkedList, ListNode } from "../utils";

let nums = [9, 2, 5];
let head = generateLinkedList([2, 10, 9]);

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  const values = new Set(nums);

  let dummy: ListNode = new ListNode(0);
  let tail: ListNode = dummy;
  let currentNode = head;

  while (currentNode) {
    if (!values.has(currentNode.val)) {
      tail.next = currentNode;
      tail = tail.next;
    } else {
      tail.next = null;
    }
    currentNode = currentNode.next;
  }
  return dummy.next;
}

console.log(JSON.stringify(modifiedList(nums, head), null, 2));
