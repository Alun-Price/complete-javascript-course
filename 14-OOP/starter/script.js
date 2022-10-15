'use strict';

// arrow fn doesnt work as constructor as doesnt have its own this keyword
// note use of capital for a constructor fn name

// const Person = function (firstName, birthYear) {
//   //Instance Properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   console.log(this);
//   // NEVER DO THIS!!! - new method for every instance - very inefficient
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// // call a constructor fn using a new

// const jonas = new Person('Jonas', 1991); // Person {firstName: 'Jonas', birthYear: 1991}

// // New {} is created
// // function is called, this = {}
// // {} is linked to a prototype
// // function automatically returns {}

// const matilda = new Person('Matilda', 2017); // Person {firstName: 'Matilda', birthYear: 2017}
// const jack = new Person('Jack', 1975); // Person {firstName: 'Jack', birthYear: 1975}

// // to check if something belongs to a particular "class" = instanceof
// console.log(jonas instanceof Person); // true

// // 209. Prototypes

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // in console, the Person object now has a [[Prototype]]: Object calcAge

// jonas.calcAge(); // 46 - amazing
// matilda.calcAge(); // 20

// // Works because any object always has access to the methods of it's prototype - Person in this case!!
// console.log(jonas.__proto__); // {calcAge: ƒ, constructor: ƒ}
// console.log(jonas.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(jonas)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens

// console.log(jonas.hasOwnProperty('firstName')); // true
// console.log(jonas.hasOwnProperty('species')); // false
// // Note: typing in jonas into the console will give Person {firstName: 'Jonas', birthYear: 1991}
// // No species
// // species is not really part of the jonas Object, it simply has access to it because of its prototype

// // 210.  Prototypal Inheritance and Prototype Chain

// // 211. Prototypal Inheritance on Built-In Objects

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__); // object.prototype = top of chain
// console.log(jonas.__proto__.__proto__.__proto__); // null

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 6, 4, 4, 5, 8, 9, 3];
// console.log(arr.__proto__); // all the array methods
// console.log(arr.__proto__ === Array.prototype); // true

// console.log(arr.__proto__.__proto__); // object.prototype

// // generally NOT a good idea to add new methods to prototypes!!!
// // JS update may reset, creates bugs when you work with other devs, etc...
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique()); // [3, 6, 4, 5, 8, 9]

// const h1 = document.querySelector('h1');

// console.dir(x => x + 1);

// // 212. Coding Challenge #1

// // 213. ES6 Classes

// // syntactic sugar but work the same way as above

// // class expression
// // const PersonCL = class {};

// // class declaration
// class PersonCL {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   static hey() {
//     console.log('Hey there!!! 👋');
//   }
// }

// const jessica = new PersonCL('Jessica', 1996);
// jessica.calcAge(); // 41

// console.log(jessica.__proto__ === PersonCL.prototype); // true

// PersonCL.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet(); // Hey Jessica

// // Classes are NOT hoisted!!!!
// // Classes are 1st class citizens - can pass into and out of functions
// // Classes are executed in strict mode!!

// // ES6 classes keep all the code together - for example, the methods are in close proximity

// // 214. Setters and Getters
// // const account = {
// //   owner: 'jonas',
// //   movements: [200, 530, 120, 300],

// //   get latest() {
// //     return this.movements.slice(-1).pop();
// //   },

// //   set latest(mov) {
// //     this.movements.push(mov);
// //   },
// // };

// // console.log(account.latest); // 300

// // account.latest = 50;
// // console.log(account.movements); // [200, 530, 120, 300, 50] Note: 50 on the end now!!

// // class PersonGet {
// //   constructor(fullName, birthYear) {
// //     this.fullName = fullName;
// //     this.birthYear = birthYear;
// //   }

// //   calcAge() {
// //     console.log(2037 - this.birthYear);
// //   }

// //   get age() {
// //     return 2037 - this.birthYear;
// //   }

// //   // set a property that already exists (_)
// //   set fullName(name) {
// //     console.log(name);
// //     if (name.includes(' ')) this._fullName = name;
// //     else alert(`${name} is not a full name!`); // sets an alert if the name doesn't have a space
// //   }

// //   get fullName() {
// //     return this._fullName;
// //   }
// // }

// // const alun = new PersonGet('Alun Price', 1973);
// // console.log(alun); // PersonGet {firstName: 'Alun Price', birthYear: 1973}
// // alun.calcAge(); // 64
// // console.log(alun.age); // 64

// // console.log(alun.__proto__ === PersonGet.prototype); // true

// // const walter = new PersonGet('Walter White', 1965);
// // console.log(walter.fullName); //  Walter White - get the alert if just walter [with no space!]

// // 215. Static Methods

// // see Array.from - converts any array-like structure into a real array
// // Array.from could not be [1, 2, 3 ].from because function is attached to Array, not the array's prototype
// // from method is in the Array namespace
// // Another example is Number.parseFloat(12)

// // Instance methods - will be added to the .prototype property
// // Static methods  - take the static keyword - see hey method in PersonStatic class

// class PersonStatic {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   static hey() {
//     console.log('Hey there!!! 👋');
//   }
// }

// PersonStatic.hey(); // Hey there!!! 👋

// // 216. Object.Create()

// // use object.create to manually set the prototype to any that we want ...
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven); // {} -> Prototype -> calcAge

// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge(); // 35

// console.log(steven.__proto__); // {calcAge: f}
// console.log(steven.__proto__ === PersonProto); // true
// console.log(steven.__proto__.__proto__); // Object
// console.log(steven.__proto__.__proto__.__proto__); // Null

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979); // use the init method kinda like a constructor but NOT THE SAME
// sarah.calcAge(); // 58

// 218.   Inheritance Between "Classes" : Constructor Functions

// create a new student child "class" and make it inherit from the Person parent "class"
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking prototypes
Student.prototype = Object.create(Person.prototype); // must be added at this point as would overwrite the introduce

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike); // Student {firstName: 'Mike', birthYear: 2020, course: 'Computer Science'}
mike.introduce(); // My name is Mike and I study Computer Science
mike.calcAge(); // 17 - method from Person prototype

// regular function call - this keyword is set to undefined - why we use Person.call(this, firstName, birthYear) in Student fn
// we needed object.create() because Student.prototype should NOT equal Person.prototype - Person.prototype should be a prototype for Student.prototype!!
// Prototype Chain -> Object [mike] -> Student.prototype -> Person.prototype -> Object.prototype -> Null

console.log(mike.__proto__); // Person (and not Student as expected) - artifact of using Object.create()
console.log(mike.__proto__.__proto__); // calcAge, constructor

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

Student.prototype.constructor = Student; // need to do this as mike.__proto__ was showing as Person
console.dir(Student.prototype.constructor); // Student with Person prototype
