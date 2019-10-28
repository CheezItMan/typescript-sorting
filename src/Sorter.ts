
export class Sorter {
  constructor(public collection : any /* TODO: Fix me! */ ) {  }

  sort(): void {
    const { length } = this.collection;
    const { collection } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (collection[j] > collection[j+1] ) {
          const temp = collection[j];
          collection[j] = collection[j+1];
          collection[j+1] = temp;
        }
      }
    }
  }
}