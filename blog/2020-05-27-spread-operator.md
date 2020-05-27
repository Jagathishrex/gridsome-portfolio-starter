---
title: 8 ways to use the Spread operator in JavaScript
path: /spread-operator
date: 2020-05-27
summary: Spread operator expands an iterable objects into its individual element. An iterable object is anything that you can loop over with our for of loop .
tags: ['Js', 'ES6', 'jstips', 'programming']
---

Learn how to use spread operator in JavaScript

![Spread Syntax Example](https://cdn-images-1.medium.com/max/3208/1*ck6Fs5k54T8Yv09D2dS0jA.png)*Spread Syntax Example*

The spread operator `(...)` is introduced in ES6 .

Spread operator expands an iterable objects into its individual element. An iterable object is anything that you can loop over with our for of loop .

Example of iterable : Array, String , Map, Set, DOM nodes.

### 1. Using Spread Operator in logging

You can use spread operator in console.log with iterable objects
```js
let fruits = ['🍈', '🍉', '🍋', '🍌'];

console.log(...fruits); //🍈 🍉 🍋 🍌
```

### 2. Spread operator for Copying Arrays
```js
let fruits = ['🍈', '🍉', '🍋', '🍌'];

let fruitsCopy = [ ...fruits ];

console.log(...fruitsCopy); //🍈 🍉 🍋 🍌
```

Copy objects
```js
let user = {name : "John", age : 20 }

let userCopy = {...user}
```
> The spread operator *does not perform deep-copy.*

### 3. Spread operator for Merging

```js
let fruits = ['🍈', '🍉', '🍋', '🍌'];

let vegetables = ['🍅', '🍆', '🥒'];

let fruitsAndVeg = [...fruits, ...vegetables]```

Merging Objects

While merging objects, if a key already present then it is replaced by last object with same key.

```js
let user1 = {name : "John", age : 20 };

let user2 = {name : "Ram", salary: '20K' };

let userCopy = {...user1, ...user2};

userCopy ; // **{name : "Ram", age :20 , salary : '20K'};**
```

### 4. Spread operator for Passing as arguments
```js
function sum(a, b) {
   return a+b;
}

let num = [1,2];

sum(...num); // 3
```
Using with math functions
```js
let num = [5,9,3,5,7];

Math.min(...num);

Math.max(...num);
```
### 5. Spread operator In Destructuring variable
```js
let [melon, ...fruits ] = ['🍉', '🍋', '🍌', '🍊'];

melon; //🍉

fruits; // [ '🍋', '🍌', '🍊']
```
Destructing Objects
```js
let user = {name : "Ram", age: 20, salary: '20K', job : "Tester" };

let { name, age, ...details } = user;

name; // Ram

age; // 20

details; // {salary: '20K', job : 'Tester'};
```

### 6. Convert NodeList Object to Array

NodeLists are array-like but don’t have all methods of Array, like forEach, map, filter, etc.
```js
let nodeList = document.querySelectorAll('.class')

var nodeArray = [...nodeList]
```

### 7. Convert String to Character

String is also an iterable object, so we can use ... to strings also.
```js
let name = "Ram";

let chars = [...name];
```

### 8. Eliminate Duplicates From an array
```js
let num = [1, 3, 1, 3, 3, 1];

let uniqueNum = [...new Set(num)];

uniqueNum; //[ 1, 3 ]
```
