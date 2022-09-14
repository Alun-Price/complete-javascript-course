'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   // console.log(firstName);
//   // return age;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven'; // no lookup as in block scope

//       // reassigning outer scope's variable
//       output = 'NEW OUTPUT!!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     //console.log(str);  // const is block scoped, so not available here
//     console.log(millenial); // var is fn scoped, so is available
//     // console.log(add(2, 3)); // add not available, unless turn off strict mode!
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jonas';

// calcAge(1991);
// //console.log(age); // referror : age is not defined
// // printAge(); // also outside scope as in calcAge scope
// //console.log(birthYear);

// Hoisting and the TDZ

// try to use vars before declaring them!!!
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas'; // undefined
// let job = 'teacher'; // can't access before initialization
// const year = 1991; // can't access before initialization

// // Functions
// // try to use functions before declaring them
// // Note: declaration function is the only one that you can use before declaring it

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   // cannot access before initialization
//   // if var - set to undefined - TypeError: addExpr is not a function
//   return a + b;
// };

// const addArrow = (a, b) => a + b; // cannot access before initialization

// // Example to show Hoisting Error with Var
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!!!');
// }

// // All products deleted
// // Why? - because var is undefined due to hoisting, undefined = falsey = 0, therefore the function was run!!!

// // Best Practices

// // Don't use var
// // Declare your vars first at the top of the script
// // Always declare your functions first before you use them

// // Window Object -> like global store

// var x = 1;
// let y = 2;
// const z = 3;

// // looking up the window Object, you'll see x:1 but not the other vars

// The THIS Keyword

// console.log(this); // the window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // undefined
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // window - weird - parent's scope = global = window
// };

// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // the jonas object
//     console.log(2037 - this.year); // 46
//   },
// };

// jonas.calcAge(); // this = jonas because it's calling the function, not the function name

// //Really improtant in borrowing

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // 20 - uses matilda's year
// console.log(`Matilda: ` + matilda.calcAge()); // undefined

// const f = jonas.calcAge;
// f(); // f.year is undefined!!

// const jonas = {
//   firstName: 'jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // the jonas object
//     console.log(2037 - this.year); // 46

//     // Solution 1 -> use self [pre ES6]
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   //   console.log(this.year >= 1981 && this.year <= 1996); // regular function call has this as undefined
//     //   console.log(self.year >= 1981 && self.year <= 1996); // this works = true
//     // };

//     // Solution 2 arrow function inherits its parent this keyword
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996); // this works = true
//     };

//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${self.firstName}`),
// };

// jonas.greet(); // Hey undefined - window.greet is undefined - no error

// // never use an arrow function as a method

// jonas.calcAge();

// // arguments keyword
// var addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5); // arguments(2) 0:2 1:5
// addExpr(2, 5, 8, 12); // some extra arguments - dont get var name but still can do this

// // The arrow function does NOT get the arguments keyword

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8); // Uncaught ReferenceError : arguments is not defined

// Note: there is a more modern way of extending parameters, so arguments is not used as much now, but this just highlights some of the keyword shortcomings of arrow functions

// Primitives vs Objects

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'jonas',
//   age: 30,
// };

// // friend also called jonas but is different age
// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend); // Friend {name: 'jonas', age: 27}
// console.log('Me', me); // Me {name: 'jonas', age: 27}  // should be age: 30 ????

// PRIMITIVES v's OBJECTS in PRACTICE

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // Davis Williams

// // Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Willaims',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica); // Davis (should be Williams)
console.log('After marriage:', marriedJessica); // Davis

// marriedJessica = {} // doesn't work as marriedJessica is a const

// copying objects
// say we wanted to copy the objects over and for them to work properly

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2.lastName); // Willaims (should be Williams)
console.log('After marriage:', jessicaCopy.lastName); // Davis (should be Davis)

console.log('After marriage:', jessicaCopy.family); // Alice, Bob, Mary, John (should be Alice, Bob)
console.log('After marriage:', jessicaCopy.family); // Alice, Bob, Mary, John (should be Alice, Bob, Mary, John)

// Note: Object.assign only creates a "Shallow Copy"
// changing the nested family array is more difficult
// need a "deep clone" operation - more complex - usually use an external library like Lodash to achieve this - we will do this later on
