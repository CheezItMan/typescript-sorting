import { NumbersCollection } from './NumbersCollection';

export interface Sortable {
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
  length: number;
}
export abstract class Sorter {

  sort(): void {
    const { length } = this;
    const collection  = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (collection.compare(j, j+1)) {
          collection.swap(j, j+1);
        }
      }
    }
  }

  abstract compare(i: number, j: number): boolean;
  abstract swap(i: number, j: number): void;
  abstract get length(): number;
}