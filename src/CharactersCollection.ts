import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length() { return this.data.length }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toUpperCase() > this.data[rightIndex].toUpperCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');

    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;

    this.data = characters.join('');
  }
}