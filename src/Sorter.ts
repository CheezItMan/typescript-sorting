import { NumbersCollection } from './NumbersCollection';
export class Sorter {
  constructor(public collection : NumbersCollection /* TODO: Fix me! */ ) {  }

  sort(): void {
    const { length } = this.collection.data;
    const { collection } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (collection.compare(j, j+1)) {
          collection.swap(j, j+1);
        }
      }
    }
  }
}