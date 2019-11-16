import { Sorter } from './Sorter';
import { NumbersCollection } from './NumersCollection';

const numbers = new NumbersCollection([0, -9, 20, 4, 6]);

const sorter = new Sorter(numbers);
sorter.sort();
console.log(numbers.data);
