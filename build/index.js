"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumersCollection_1 = require("./NumersCollection");
var numbers = new NumersCollection_1.NumbersCollection([0, -9, 20, 4, 6]);
var sorter = new Sorter_1.Sorter(numbers);
sorter.sort();
console.log(numbers.data);
