"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(value) {
        const newNode = new ListNode(value);
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            let tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = newNode;
        }
    }
    get length() {
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
    at(index) {
        let current = this.head;
        let currentIndex = 0;
        if (index < 0 || !this.head) {
            throw new Error('Index out of bounds!');
        }
        while (current) {
            if (currentIndex == index) {
                return current;
            }
            currentIndex++;
            current = current.next;
        }
        throw new Error('Index out of bounds!');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('list is empty');
        }
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        return leftNode.value > rightNode.value;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const temp = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = temp;
        console.log(`Swapping: ${rightNode.value} and ${leftNode.value}`);
    }
    print() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
exports.LinkedList = LinkedList;
