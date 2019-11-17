import { NumbersCollection } from './NumersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// sorting array of numbers
const numbers = new NumbersCollection([0, -9, 20, 4, 6]);
numbers.sort();
console.log(numbers.data);

// sorting string
const string = new CharactersCollection('Xbafkay');
string.sort();
console.log(string.data);

// sorting linkedList
const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(-1);
linkedList.add(10);
linkedList.add(2);

linkedList.sort();
linkedList.print();
