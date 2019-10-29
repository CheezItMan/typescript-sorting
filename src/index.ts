import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


const collection = new NumbersCollection([5, 7, 1, -5, 6, 3]);
collection.sort();
console.log(collection.data);


const charCollection = new  CharactersCollection('Tom Hardy');
charCollection.sort();
// console.log('sorting string');
console.log(charCollection.data);

const list = new LinkedList();
list.add(3);
list.add(1);
list.add(5);
list.add(-27);
list.sort();
list.print();