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
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // linking prototypes
// Student.prototype = Object.create(Person.prototype); // must be added at this point as would overwrite the introduce

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike); // Student {firstName: 'Mike', birthYear: 2020, course: 'Computer Science'}
// mike.introduce(); // My name is Mike and I study Computer Science
// mike.calcAge(); // 17 - method from Person prototype

// // regular function call - this keyword is set to undefined - why we use Person.call(this, firstName, birthYear) in Student fn
// // we needed object.create() because Student.prototype should NOT equal Person.prototype - Person.prototype should be a prototype for Student.prototype!!
// // Prototype Chain -> Object [mike] -> Student.prototype -> Person.prototype -> Object.prototype -> Null

// console.log(mike.__proto__); // Person (and not Student as expected) - artifact of using Object.create()
// console.log(mike.__proto__.__proto__); // calcAge, constructor

// console.log(mike instanceof Student); // true
// console.log(mike instanceof Person); // true
// console.log(mike instanceof Object); // true

// Student.prototype.constructor = Student; // need to do this as mike.__proto__ was showing as Person
// console.dir(Student.prototype.constructor); // Student with Person prototype

// 219. Coding Challenge #2

// 220. Inheritance Between "Classes" : ES6 Classes
// class StudentCl extends Person {
//   // only need constructor if need extra over parent class
//   constructor(fullName, birthYear, course) {
//     // needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${2037 - this.birthYear} years old, but I feel more like ${
//         2037 - this.birthYear + 10
//       } due to excessive amounts of study!!!`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// console.log(martha); // StudentCl {firstName: 'Martha Jones', birthYear: 2012, course: 'Computer Science'}
// martha.calcAge(); // old calcAge from parent is overwritten by the new calcAge fn - polymorphism
// martha.introduce(); // My name is Martha Jones and I study Computer Science

// 221. Inheritance Between "Classes" : Object.create()

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

// const StudentProto = Object.create(PersonProto); // StudentProto under PersonProto
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto); // jay linked to StudentProto and therefore to PersonProto

// // [jay] Object -> StudentProto -> PersonProto [calcAge] -> Object prototype -> null

// jay.init('Jay', 2010, 'Science'); // typing jay in console -> {firstName: 'Jay', birthYear: 2010, course: 'Science'}
// jay.introduce(); // My name is Jay and I study Science
// jay.calcAge(); // 27 - from PersonProto

// to check the chain, console.log jay, press enter, click down arrow to prototype -> init and introduce
// second prototype - click down arrow -> calcAge and init from PersonProto

// 222. Another Class Example

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // Protected Property
//     this._pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   // Public Interface
//   getMovements() {
//     return this._movements;
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true; // dont want complex logic for example here
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log('Loan approved!');
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// acc1.deposit(250);
// acc1.withdraw(140);

// console.log(acc1);
// console.log(acc1._pin); // 1111 - BUT shouldn't be accessible from outside account!!!

// acc1.requestLoan(1000); // Loan approved - public domain okay
// acc1._approveLoan(1000); // Should not be able to access this method in public domain!!

// SO it becomes obvious that we need data encapsulation and data privacy!!!!

//  223. Encapsulation : Protected Properties and Methods

// 2 Reasons for Encapsulation
// Prevent code from outside the class manipulating code inside the class
// When we expose only a small subset of methods to the public interface, we can change with confidence the private methods without worrying about changing code that the external interface relies on!

// Proposals in place for JS to truely support privacy BUT not fully realised yet
// Here we will fake privacy - movements array is first
// Protected methods begin with _ - convention so other team members know that the class is not to be touched outside of the class (_movements)

// console.log(acc1.getMovements()); // [250, -140, 1000] - can get the movements without changing the movements array
// console.log(acc1._pin); // 1111 - still accessible

// 224. Encapsulation: Private Class Fields and Methods

// "Class fields" proposal - not part of JS right now
// Public Fields
// Private Fields
// Public Methods
// Private Methods

class Account {
  // Public Fields (instances)
  locale = navigator.language;

  // Private Fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Property
    this.#pin = pin;
    //this.#movements = [];
    //this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Public Interface/Methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved!');
      return this;
    }
  }

  // Private Methods
  #approveLoan(val) {
    return true; // dont want complex logic for example here
  }

  // Static - not available on instances but on the class itself
  static helper() {
    console.log('Helper');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
// // console.log(#pin); // Uncaught SyntaxError: Private field '#pin' must be declared in an enclosing class
// // console.log(#movements); // Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class
// console.log(acc1.getMovements()); // []
// //acc1.#approveLoan(100); // Uncaught SyntaxError: Private field '#approveLoan' must be declared in an enclosing class
// // note that #methods not operational yet!!

// //console.log(acc1.helper()); // static not available on instance
// console.log(Account.helper()); // static method is available on the class

// 225. Chaining Methods

// If we want to chain the methods in a class (usually get type methods), we need to add a 'return this;' line.  This is because the chaining process requires a return and we want to return Account for the next method in the chain!!

// Example
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements()); // [300, 500, -35, 25000, -4000] - after we add return this to the methods!!!

// 226. ES6 Class Summary

// Watch the video to get an overview of the ES6 class syntax

// extend Parent
// Public Fields
// Private Fields (#)
// Public static fields
// constructor() {super(parent params); this.#course = course}
// Public Method introduce() {}
// Private Method(works?) #makeCoffee()
// How to ref private and public fields in method this.#studyHours += h;
// Getter Method - get testScore() {return this._testScore;}
// Setter Method - set testScore(score) {this._testScore = score < 20 ? score :0;}
// Static Method = available only on class, not on instances
// Creating new object - const student = new Student('Jonas', 2020, 2037, 'Medecine');

// Classes are "syntactic sugar" over constructor functions
// Classes are NOT hoisted
// Classes are 1st class citizens
// Class body is always executed in strict mode
