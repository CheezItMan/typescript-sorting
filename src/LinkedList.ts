import { Sorter } from './Sorter';

class ListNode {
  constructor(public value: number, public next: ListNode | null = null ) {  }
}


export class LinkedList extends Sorter {
  head: ListNode | null = null

  add(value: number): void {
    const newNode = new ListNode(value);
    
    if (this.head == null) {
      this.head = newNode;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
  }

  get length(): number {
    if (!this.head) {
      return 0;
    } 
    let length = 1;
    let current = this.head;
    while (current.next) {
      current = current.next;
      length++;
    }
    return length;
  }

  at(index: number): ListNode {
    let current: ListNode | null = this.head;
    let currentIndex = 0;
    if (index < 0 || !this.head) {
      throw new Error('Index out of bounds!');
    }

    while(current) {
      if (currentIndex == index) {
        return current;
      }

      currentIndex++;
      current = current.next;
    }

    throw new Error('Index out of bounds!');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('list is empty');
    }
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex)

    return leftNode.value > rightNode.value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const temp = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = temp;

    console.log(`Swapping: ${rightNode.value} and ${leftNode.value}`);
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let current: ListNode | null = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}