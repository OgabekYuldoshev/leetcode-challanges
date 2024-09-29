// 641. Design Circular Deque
// Solution: https://leetcode.com/problems/design-circular-deque/submissions/1406080654/?envType=daily-question&envId=2024-09-28

class LNode {
  value: number;
  next: LNode | null = null;

  constructor(value: number, next?: LNode) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

class MyCircularDeque {
  size: number = 0;
  length: number = 0;
  front: LNode | null = null;

  constructor(k: number) {
    this.size = k;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    // Create a new node
    const newNode = new LNode(value);

    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      newNode.next = this.front;
      this.front = newNode;
    }

    this.length++;

    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    const newNode = new LNode(value);

    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      let currentNode = this.front;
      while (currentNode?.next) {
        currentNode = currentNode.next;
      }
      if (currentNode) {
        currentNode.next = newNode;
      }
    }
    this.length++;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    if (this.front) {
      this.front = this.front.next;
    }
    this.length--;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    let currentNode = this.front;
    let prevNode: LNode | null = null;
    while (currentNode?.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    if (prevNode !== null) {
      prevNode.next = null;
      this.length--;
      return true;
    }

    return this.deleteFront();
  }

  getFront(): number {
    return this.front?.value ?? -1;
  }

  getRear(): number {
    let currentNode = this.front;
    while (currentNode?.next) {
      currentNode = currentNode.next;
    }

    return currentNode?.value ?? -1;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  isFull(): boolean {
    return this.length === this.size;
  }
}

const q = new MyCircularDeque(5);
console.log(q.insertFront(9));

console.log(q.deleteLast());

console.log(q.getFront());
console.log(q.getRear());

// console.log(q.deleteLast());

// console.log(q.insertLast(9));

// console.log(q.deleteLast());
// console.log(q.getFront());
// console.log(q.getRear());

console.log(JSON.stringify(q.front));

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
