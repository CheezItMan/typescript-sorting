"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    compare(i, j) {
        return this.data[j] < this.data[i];
    }
    swap(i, j) {
        const temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    }
}
exports.NumbersCollection = NumbersCollection;
