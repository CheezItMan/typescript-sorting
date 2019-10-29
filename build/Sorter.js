"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    sort() {
        const { length } = this;
        const collection = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (collection.compare(j, j + 1)) {
                    collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
