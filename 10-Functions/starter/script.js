'use strict';

// Default Parameters

//set parameter by default

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5 way of adding defaults
//   // numPassengers = numPassengers || 1;
//   //price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');

// // At first, will get uncaught referenceError: numPassengers is not defined
// // We need to set defaults to handle the absence of the correct parameters
// // see ES5 way of doing it first
// // adding the default values in the parameter () is the ES6 way of doing it
// // Of course, can override the defaults

// createBooking('LH123', 2, 800); // {flightNum: 'LH123', numPassengers: 2, price: 800}

// // We can use the parameters that come before - BUT NOT AFTER - the current parameter to calc something in the current parameter
// // in the example we could have price = 199 * numPassengers, but numPassengers could not use the price var to calc itself!!!
// createBooking('LH123', 5); // {flightNum: 'LH123', numPassengers: 5, price: 995}

// // Can't skip a parameter - way around it is to add 'undefined' in its place!!!

// 129. How Passing Arguments Works : Value v Reference

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 247385758847,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 247385758847) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passport!!');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight); //LH234 - not LH999 as you might expect from the function; primitive remains unchanged
// // console.log(jonas); // {name: 'Mr. Jonas Schmedtmann', passport: 247385758847} - so Mr. Jonas .. = object changed

// // Is same as doing ..
// // const flightNum = flight;
// // const passenger = jonas;
// // only copying the ref in the memory heap
// // passenger and jonas are the same object in the memory heap, so are interchangeable

// // The fact that objects behave this way can have unforseeable consequences in large codebases and working with multiple devs

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(jonas); // {name: 'Mr. Jonas Schmedtmann', passport: 820056775626}
// // so newPassport fn completely randomises the passport number and gives it to jonas.passport
// // now the alert is 'Wrong Passport!!'
// // the object accepts and changes the passport key value!!!
// // 2 functions are manipulating the same object!!!

// // Passing by Value
// // Passing by Reference - JS DOES NOT HAVE THIS!!! Pass to a ref but not by ref ...

// 130. First-Class and Higher-Order Functions
// First Class Functions
// JS treats functions as first-class citizens
// Means that functions are simply values
// Functions are just another type of object
// Allows us to store functions in vars (as are values)
// Pass functions as arguments to OTHER functions
// (eg. const greet = () = console.log('Hello!); to addEventListener('click', greet)
// Return functions FROM other functions
// Functions = object = have methods (eg. bind method)

// First Class functions -> allow us to write higher-order functions

// Higher-Order Functions
// A function that receives another function as an argument, that returns a new function, or both.
// Example: in previous example, the addEventListener fn is a higher-order function [it receives the greet fn as an argument].
// We call the greet fn, a callback function - as it will be called later by the higher-order function!!!

// Confusion between First-class and Higher-order
// they are NOT the same thing!!
// first-class = feature of language = means function is a value
// no first-class functions in practice = they're a concept
// Higher-order functions exist in practice
// They are possible because JS has first-class functions

// 131. Functions Accepting Callback Functions

// const oneword = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher Order Function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// // Original string: Javascript is the best!
// // Transformed string: JAVASCRIPT is the best!
// // Transformed by: upperFirstWord
// transformer('Javascript is the best!', oneword);
// // Original string: Javascript is the best!
// // Transformed string: javascriptisthebest!
// // Transformed by: oneword

// //High 5 Example

// const high5 = function () {
//   console.log('🙌');
// };

// document.body.addEventListener('click', high5); // 🙌' on click
// ['Jonas', ' Martha', 'Adam'].forEach(high5); // forEach ->  3 x 🙌'

// // Note: callbacks are used ALL the time in JS - WHY?
// //  makes it easier to split up code into more reuseable chuks
// // ABSTRACTION - hide the detail, so can think of things at a higher level - essentially higher-order function DELEGATES some aspects to the other functions

// // 132 . Functions Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet(`Hey`);
// greeterHey('Jonas'); // Hey Jonas
// greeterHey('Steven'); // Hey Steven

// // this works because of a closure -> closures are one of the most complex and misunderstood topics in JS - there will be 2 sections on them later!!!

// greet('Hello')('Jonas'); // Hello Jonas - greet('Hello') is a function we can call with the parameter('Jonas')!!!

// // Hugely important in Functional Programming Paradigm

// // Try to rewrite the greet fn using arrows

// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

// greetArrow('Hello')('Alun'); // Hello Alun

// 133. The call and apply Methods

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //book: function (){}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Lufthansa flight LH239
// lufthansa.book(635, 'John Smith'); // John Smith booked a seat on Lufthansa flight LH635
// console.log(lufthansa); // {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(2), book: ƒ}
// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book; // store the book method in to the book var - we want to add it to Eurowings

// // book(23, 'Sarah Williams'); // Uncaught TypeError: cannot read property 'airline' of undefined - a 'this' issue

// // The call() method calls the function with a given this value and arguments provided individually.
// book.call(eurowings, 23, 'Sarah Williams'); // Sarah Williams booked a seat on Eurowings flight EW23

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 49, 'Roger Federer'); // Roger Federer booked a seat on Swiss Air Lines flight LX49

// // the APPLY method - does the same but with a given this value and an array of data
// // not used as much as we have a better way of doing it [use .call() and spread operator]
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData); // George Cooper booked a seat on Swiss Air Lines flight LX583
// console.log(swiss);
// book.call(swiss, ...flightData); // alternative way using call and spread operator

// 134. The BIND method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams'); // Steven Williams booked a seat on Eurowings flight EW23
// bookLX(203, 'Swiss Bloke');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Alun Price'); // Alun Price booked a seat on Eurowings flight EW23

// // PARTIAL APPLICATION - some of the function already defined

// // With Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); // addVAT => value + value * 0.23

// console.log(addVAT(100)); // 123
// console.log(addVAT(23)); // 28.29

// // CHALLENGE - rewrite above where one function returns another
// const altTax = rate => value => {
//   //console.log(value);
//   //console.log(rate);
//   console.log(`${value + value * rate}`);
// };

// const altVAT = altTax(0.23);
// altVAT(100);
// altVAT(23);

// // Jonas's Solution - pretty similar - didn't use arrow fns to avoid confusion

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// 136. Immediately Invoked Function Expressions

// const runOnce = function () {
//   console.log(`This will never run again`);
// };

// runOnce();

// (function () {
//   console.log(`This will never run again`);
// })();

// // *** Wrap in () and immediately run () ***

// // Works with arrow functions
// (() => console.log(`This will also never run again`))();

// Why were these types of functions invented?
// Scope - global has no access to var defined in function = is encapsulated
// IIFE = pattern that became popular

// 137. CLOSURES

// closures happen automatically in certain situations

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// In Call Stack (Order in which fns are called) -> Global EC = secureBooking = <f>, booker =<f> ; secureBooking() EC passengerCount=0
// Once secureBooking EC runs it disappears off the call stack
// In Global Scope -> secureBooking =<f> and booker = <f>
// In secureBooking Scope -> passengerCount = 0 and both functions
// Scope Chain = oder in which functions are wriiten in the code
// Call Stack -> booker EC <empty>
// Scope Chain -> booker()scope <empty> secureBooking =<f> and booker =<f> BUT has access to passengerCount via a CLOSURE

// A function has access to the variable environment (VE) of the execution context in which it was created!!
// Closure : VE attached to the function, exactly as it was at the time and place the function was created
// Booker function closed over it's parent function's variable environment (i.e. secureBooking) [includes args]

// NOTE: closure has priority over the scope chain

// booker(); // 1 passengers
// booker(); // 2 passengers

// Closure : is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone (or returned)

// Closure(less formal) : gives a function access to all of the variables of its parent function, even after that parent function has returned.  The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

// Closure : makes sure that a function doesn't lose connection to variables that existed at the function's birth place.

// Closure is NOT a tangible JS object that we can access -  it's a JS feature that happens automatically
// We see it in action when a fn has access to it's parent variables.

//console.dir(booker); // f anonymous() [Scopes] 0: Closure (secureBooking) {passengerCount: 2} 1: Script {secureBooking: f, booker, f}

// 138. MORE CLOSURE EXAMPLES

// don't need to return a function from another function to define a closure

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g(); // cl nothing
// f(); // 46 [23 * 2]
// // Re-assigning f function
// h(); // cl nothing
// f(); // 1554 [777 * 2]
// console.dir(f); // 0: Closure (h) 1:Script f:f, g:f, h:f

// // f is REBORN in h function, after first being born in g!!!

// // Example 2 - Timer

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000; // shows that closures have priority over scope chain
// boardPassengers(180, 3);

// Note: setTimeout fn was executed completely separately fromn the boardPassengers fn but was still able to use it's variables
