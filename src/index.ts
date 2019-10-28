import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';


const collection = new NumbersCollection([5, 7, 1, -5, 6, 3]);
const sorter = new Sorter(collection);
sorter.sort();
console.log(sorter.collection.data);