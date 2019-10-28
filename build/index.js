"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const collection = new NumbersCollection_1.NumbersCollection([5, 7, 1, -5, 6, 3]);
const sorter = new Sorter_1.Sorter(collection);
sorter.sort();
console.log(sorter.collection.data);
