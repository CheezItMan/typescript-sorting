"use strict";
class Sorter {
    constructor(list) {
        this.collection = list;
    }
    sort() {
        let i = 0;
        const { length } = this.collection;
        const { collection } = this;
        while (i < length) {
            let j = 0;
            while (j < length - i - 1) {
                if (collection[j] > collection[j + 1]) {
                    let temp = collection[j];
                    collection[j] = collection[j + 1];
                    collection[j + 1] = temp;
                }
                j++;
            }
            i++;
        }
    }
}
const sorter = new Sorter([10, 15, -5, 6, 20, 1]);
sorter.sort();
console.log(sorter.collection);
