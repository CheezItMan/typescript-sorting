export class NumbersCollection {
  constructor(public data: number[]) {  }

  compare(i: number, j:number): boolean {
    return this.data[j] < this.data[i];
  }

  swap(i:number, j:number): void {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}