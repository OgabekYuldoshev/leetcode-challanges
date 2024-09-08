export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function generateLinkedList(nums: number[]) {
  if (nums.length === 0) throw new Error("List must not be empty!");

  let head: ListNode = new ListNode(0);
  let tail = head;

  nums.forEach((num) => {
    tail.next = new ListNode(num);
    tail = tail.next;
  });

  return head.next;
}
