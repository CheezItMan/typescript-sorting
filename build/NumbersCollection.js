"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
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
