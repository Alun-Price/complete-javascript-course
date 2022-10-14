'use strict';

// arrow fn doesnt work as constructor as doesnt have its own this keyword
// note use of capital for a constructor fn name

const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log(this);
  // NEVER DO THIS!!! - new method for every instance - very inefficient
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

// call a constructor fn using a new

const jonas = new Person('Jonas', 1991); // Person {firstName: 'Jonas', birthYear: 1991}

// New {} is created
// function is called, this = {}
// {} is linked to a prototype
// function automatically returns {}

const matilda = new Person('Matilda', 2017); // Person {firstName: 'Matilda', birthYear: 2017}
const jack = new Person('Jack', 1975); // Person {firstName: 'Jack', birthYear: 1975}

// to check if something belongs to a particular "class" = instanceof
console.log(jonas instanceof Person); // true

// 209. Prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// in console, the Person object now has a [[Prototype]]: Object calcAge

jonas.calcAge(); // 46 - amazing
matilda.calcAge(); // 20

// Works because any object always has access to the methods of it's prototype - Person in this case!!
console.log(jonas.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false
// Note: typing in jonas into the console will give Person {firstName: 'Jonas', birthYear: 1991}
// No species
// species is not really part of the jonas Object, it simply has access to it because of its prototype

// 210.  Prototypal Inheritance and Prototype Chain

// 211. Prototypal Inheritance on Built-In Objects

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); // object.prototype = top of chain
console.log(jonas.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 6, 4, 4, 5, 8, 9, 3];
console.log(arr.__proto__); // all the array methods
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__); // object.prototype

// generally NOT a good idea to add new methods to prototypes!!!
// JS update may reset, creates bugs when you work with other devs, etc...
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // [3, 6, 4, 5, 8, 9]

const h1 = document.querySelector('h1');

console.dir(x => x + 1);

// 212. Coding Challenge #1

// 213. ES6 Classes
